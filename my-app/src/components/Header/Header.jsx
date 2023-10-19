import React from "react";
import logo from '../Header/SGN_09_24_2022_1663968217400 1.svg'
import userPhoto  from './Mask group.svg';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
// import Spinner from '../spinner/spiner';

const HeaderBlock = styled.div`
  width: 1440px;
  border: 1px solid green;
  height: 93px;
  display: flex ;
  .logo {
    width: 141px;
    height: 141px;
    margin-left: 60px;
    cursor:pointer;
  }
  .user {
    justify-content: space-between;
    display: flex;
    width: 251px;
    height: 26px;
    margin-left: 291px;
    margin-top: 33px;
    span {
        font-family: inter;
        color:grey;
        margin-top:1px;
    }
    button {
        background-color: #61dafb;
        border: none;
        border-radius: 5px;
        font-size:14px;
        line-height:16.94px;
        font-family: inter;
        cursor: pointer;
    }
  }
  .header-links {
    display: flex;
    width: 236px;
    height: 17px;
    justify-content: space-between;
    margin-left: 401px;
    margin-top: 38px;
    a {
        color:black;
        text-decoration: none;
        font-family:inter;
        font-size: 14px;
        line-height: 16.94px;
    }
    
  }
  .userSlash {
    width: 2px;
    height: auto;
    background-color: #029491;
  }
  .header-stats {
    width: 175px;
    height: 63px;
    background-color: #d9d9d9;
    margin-top: 15px;
    margin-left: 128px;
    font-size: 10px;
    font-family: inter;
    color: grey;
    
    div:first-child {
      width: 149px;
      height: 12px;
      margin-top: 14px;
      margin-left:10px;
      span {
        color: #000000;
        font-size: 14px;
        font-family: inter;
      }
    }
    div:last-child {
      width: 140px;
      height:12px;
      margin-left: 27px;
      span {
        color: #8AC540;
        font-size: 14px;
        font-family: inter;
      }
    }
  }
  .auth-user {
    width: 111px;
    height: 32px;
    border: 1px solid green;
    display:flex;
    font-family: inter;
    font-size:14px;
    line-height: 16.94px;
    margin-left: 128px;
    margin-top: 30px;
    div:nth-child(1) {
      
    }
    .exit {
      font-size: 10px;
      width: 31px;
      height: 12px;
      color: grey;
      float:right;
    }
    div:nth-child(2) {
      margin-left: 3px;
      width:32px;
      heigth:32px;
    }
  }
`

const Header = ({auth,setAuth}) => {
    const navigate = useNavigate();
    return (
        <HeaderBlock>
            <div className="logo" onClick={()=>navigate('/')}><img src={logo} alt="logo" /></div>
            <div className="header-links">
                <a  href="#">Главная</a>
                <a  href="#">Тарифы</a>
                <a href="#" >FAQ</a>
            </div>
            {!auth? 
                <div className="user">
                <span>Зарегистрироваться</span>
                <div className="userSlash"></div>
                <button onClick={()=>navigate('/authorization')} className="signIn">Войти</button>
                </div> : 
             <>
                <div className="header-stats"><div>Использовано компаний  <span> {`34`}</span> </div>  <br /><div>Лимит по компаниям <span> {`100`}</span></div> </div>
                <div className="auth-user">
                    <div>
                        <span>Алексей А.</span>
                        <div className="exit">Выйти</div>
                    </div>
                    <div ><img src={userPhoto}  alt="userPhoto" /></div>
                </div>
              </>
            }
            
        </HeaderBlock>
    )
}
export default Header;