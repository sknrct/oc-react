import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer/Footer";
import { CollapseProvider } from "./useCollapse";
import ErrorPage from "./Pages/ErrorPage";
import "./App.scss"

const App = () => {
  return (
    <HashRouter>
      <Header />
        <CollapseProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        </CollapseProvider>
        <Footer />
    </HashRouter>
  );
};

export default App;