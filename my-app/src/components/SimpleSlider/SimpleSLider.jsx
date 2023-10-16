import React from "react";
import Slider from "react-slick";
import styled from 'styled-components'

import textLogo1 from './Mask group (1).svg';
import textLogo2 from './Mask group (2).svg';
import textLogo3 from './Mask group (3).svg';

const ContentDiv = styled.div`
    width: 1320px;
    border : 1px solid grey;
    margin: 0 auto;
    img:nth-child(2) {
        margin-left: 157px;
    }
    .divInfo {
        width: 400px;
        height:225px;
        border-radius: 10px;
        border: 1px solid red;
        box-shadow: 0px 0px 20px 0px #00000033;

        img {
            margin: 30px 0px 19px 24px;
        }
        
    }
    .headerCard {
        position: relative;
        width:415px;
        height:132px;
        border: 1px solid green;
        h2 {
            margin: 30px 0 10px 30px ;
        }
        img {
            margin:-89px 0 0 307px;
        }
    }
    .headerCardText {
        width:313px;
        height:22px;
    }
    .cards {
        margin-top:70px;
        width: 1320px;
        height:540px;
        border: 1px solid brown;
        justify-content: space-between;
    }
    .card-item {
        width:415px;
        height:540px;
        border: 2px solid black;
        font-family: inter;
    }
    .currentPrice {
        width:113px;
        height:36px;
        font-size:30px;
        line-height:36.31px;
        margin: 33px 0 10px 30px;
        
    }
    .oldPrice {
        width:97px;
        height:30px;
        font-size:22px;
        border: 1px solid black;
        color: grey;
        text-decoration: line-through;
        margin: 33px 0 0 19px;
    }
    .currentTarif {
        width:134px;
        height:24px;
        background-color:#3BA5E0;
        font-size: 14px;
        border-radius:10px;
        line-height: 17px;
        margin: 12px 0 0 70px;
        color: #fff;
        span {
            margin: 0px 0px  0px 4px;
        }
    }
    
`
const TextDiv = styled.div`
    font-family: inter;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    width: 359px;
    height: 66px;
    border: 1px solid black;
    margin-left:24px;

    &.titleSub {
        margin-top: 353px;
        margin-bottom:70px;
        margin-left:0px;
        width: 534px;
        height:48px;
    }
    &.tarifInfo {
        width:366px;
        height:110px;
        margin-bottom:55px;
        &span {
            margin-top:-2px;
        }
    }
    &.tarif-credit {
        width:371px;
        height:22px;
        margin-bottom: 59px;
    }
`



export default function SimpleSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <Slider style={{width:1248}} {...settings}>
            <div className="divInfo">
                <img src={textLogo1} alt="logo1" />
                <TextDiv>Высокая и оперативная скорость <br /> обработки заявки</TextDiv>
            </div>
            <div className="divInfo">
                <img src={textLogo2} alt="logo2" />
                <TextDiv> Огромная комплексная база <br /> данных, обеспечивающая <br />    объективный ответ на запрос</TextDiv>
            </div>
            <div className="divInfo">
                <img src={textLogo3} alt="logo3" />
                <TextDiv>Защита коfнфеденциальных сведений, <br /> не подлежащих разглашению по <br /> федеральному законодательству</TextDiv>
            </div>
            <div className="divInfo">
                <img src={textLogo1} alt="logo1" />
                <TextDiv>Высокая и оперативная скорость <br /> обработки заявки</TextDiv>
            </div>
            <div className="divInfo">
                <img src={textLogo2} alt="logo2" />
                <TextDiv> Огромная комплексная база <br /> данных, обеспечивающая <br />    объективный ответ на запрос</TextDiv>
            </div>
            <div className="divInfo">
                <img src={textLogo3} alt="logo3" />
                <TextDiv>Защита конфеденциальных сведений, <br /> не подлежащих разглашению по <br /> федеральному законодательству</TextDiv>
            </div>
        </Slider>
    );
}
