import React from "react";
import logo from '../Header/SGN_09_24_2022_1663968217400 1.svg'
const Header = () => {
    return (
        <div className="header">
            <div className="logo"><img src={logo} alt="logo" /></div>
            <div className="header-links">
                <a  href="#">Главная</a>
                <a  href="#">Тарифы</a>
                <a href="#" >FAQ</a>
            </div>
            <div className="user">
                <span>Зарегистрироваться</span>
                <div className="userSlash"></div>
                <button className="signIn">Войти</button>
            </div>
        </div>
    )
}
export default Header;