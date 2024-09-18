import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';  // Import HelmetProvider
import { nav } from "./core/navigation";
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Analytics } from "@vercel/analytics/react"


const App = () => {
  return (
    <HelmetProvider> {/* Wrap the entire app in HelmetProvider */}
      <Analytics/>
      <Router>
        <Header />
        <Routes>
          {nav.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
      <Footer />
    </HelmetProvider>
  );
};

export default App;
