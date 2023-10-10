const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Ура! Заработало!');
});

module.exports = router;
