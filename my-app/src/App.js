import './App.css';
import React from 'react';
import styled from 'styled-components'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import LoginPage from './components/Login/login';

const AppBlock = styled.div`
    width: 1440px;
    height:2867px;
`

function App() {
  const [auth,setAuth] = React.useState(false);
  return (
    <AppBlock>
      {/* <Header auth={auth} setAuth={setAuth} />
      <Main auth={auth} setAuth={setAuth} />
      <Footer/> */}
      <LoginPage auth setAuth={setAuth} />
    </AppBlock>
  );
}

export default App;
