import React from "react";
import styled from "styled-components";


const Button = styled.button`
    cursor:pointer;
    background-color: #5970FF;
    border: none;
    height: 59px;
    width : 355px;
    font-size:22px;
    color:#fff;
    border-radius:5px;
    /* opacity:50%; */
    margin-bottom:15px;
    font-family: inter;
`
const Input = styled.input`
    width:379px;
    height:43px;
    border:1px solid #C7C7C7;
    border-radius: 5px;
    padding:0;
    margin:0;
    background: none;
    font-size:18px;
`


const SingUp = ({setAuth}) => {

    return (
        <>
            <div className="userSpans">
                <span>Войти</span>
                <span>Зарегистрироваться</span>
            </div>
            <div className="userForm">
                <span>логин или номер телефона</span>
                <Input />
                <span className="worstLogin">Введите корректные данные</span>
                <span>Пароль</span>
                <Input type="password" />
                <span className="worstPassword">Неправильный пароль</span>
            </div>
            <div className="signUp">
                <Button onClick={() => setAuth(true)} >Войти</Button>
                <a href="#">Восстановить пароль</a>

            </div>
        </>

    )
}

export default SingUp;