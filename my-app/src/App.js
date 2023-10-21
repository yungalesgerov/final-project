import './App.css';
import React from 'react';
import styled from 'styled-components'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import LoginPage from './components/Login/login';
import {Routes, Route, useNavigate, useLocation, BrowserRouter} from "react-router-dom";
import SearchPage from './components/searchPage/searchPage';
const AppBlock = styled.div`
    width: 1440px;
    height:2867px;
`

function App() {
  const [auth,setAuth] = React.useState(false);
  return (
    <BrowserRouter>
      <AppBlock>
        <Header auth={auth} setAuth={setAuth} />
        <Routes>
          <Route path={"/"} exact element={<Main auth={auth} />} />
          <Route path={"/authorization"} element={<LoginPage setAuth={setAuth} auth={auth} />} />
          <Route path={"/search"} element={<SearchPage />} />
        </Routes>
        <Footer/>
      </AppBlock>
    </BrowserRouter>
    
  );
}

export default App;
