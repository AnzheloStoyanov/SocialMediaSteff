// src/App.js
import React  from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { nav } from "./core/navigation";
import './App.css'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


const App = () => {

  return (
    <>
      <Router>
	<Header></Header>
        <Routes>
          {nav.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
      <Footer></Footer>
    </>
  );
};

export default App;
