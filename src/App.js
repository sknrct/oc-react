import { HashRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Pages/home";
import "./App.scss"

const App = () => {
  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        </HashRouter>
  );
};

export default App;
