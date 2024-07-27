import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./Composants/header/header";
import React from "react";
import Home from "./Pages/home";
import Footer from "./Composants/footer/footer";
import "./App.scss"

const App = () => {
  return (
    <HashRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
    </HashRouter>
      
  );
};

export default App;
