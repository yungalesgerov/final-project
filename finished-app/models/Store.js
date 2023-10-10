const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('limax');

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Введите имя!'
  },
  slug: String,
  description: {
    type: String,
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  photo: String
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

// Define our indexes
storeSchema.index({
  name: 'text',
  description: 'text'
});

storeSchema.pre('save', async function(next) {
  if (!this.isModified('name')) {
    next();
    return;
  }
  this.slug = slug(this.name);
  const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i');
  const storesWithSlug = await this.constructor.find({ slug: slugRegEx });
  if (storesWithSlug.length) {
    this.slug = `${this.slug}-${storesWithSlug.length + 1}`;
  }
  next();
});

module.exports = mongoose.model('Store', storeSchema);
