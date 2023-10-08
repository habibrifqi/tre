// import React from 'react'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './app.css'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeWithComponents/>} />
          <Route path="/tre" element={<HomeWithComponents/>} />
        </Routes>
      </Router>
    </>
  );
}

const HomeWithComponents = () => (
  <>
    <Navbar />
    <Home />
    <Main />
    <Footer />
  </>
);

export default App
