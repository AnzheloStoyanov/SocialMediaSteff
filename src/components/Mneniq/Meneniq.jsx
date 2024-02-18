import React from "react";
import "./testimonials.scss";
import TestelmonialsSlider from "./TestelmonialsSlider";

export default function Mneniq() {
  return (
      <div className="testelmonials-container">
      <div className="containerT">
        <div className="head-box">
          <h6>Отзиви</h6>
          <h4>Какво споделят нашите гости</h4>
          <div className="line" />
        </div>
        <div  className="head-testemoials">
          <TestelmonialsSlider></TestelmonialsSlider>
        </div>
      </div>
      </div>
        );
}
