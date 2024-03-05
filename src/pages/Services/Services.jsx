import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import lamp from "../../asstes/images/lamp.png";
import car from "../../asstes/images/car.png";
import yourbrand from "../../asstes/images/yourbrand.png";
import arrowRight from "../../asstes/images/arrow.png";

import ServicesContainer from "../../components/Services/ServicesContainer";
import "./Services.scss";

export default function Services() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);
  return (
    <>
      <div className="services-page">
        <ServicesContainer></ServicesContainer>
        <div className="services-page__strategy strategy">
          <div>
            <div className="strategy__title">
              <img src={lamp}></img>
              <h1>Strategy & Conception</h1>
              <h3>Креативна Видео Концепция</h3>
            </div>
            <p>
              Създаването на креативна стратегия е винаги първата стъпка от
              работата ни с нов бранд, тъй като е изключително важно да поставим
              здрави основи и да изградим правилните стъпки, чрез които ще
              достигнем до точната аудитория. Концепцията се изгражда на база
              задълбочено проучване на пазар, таргет аудитория, конкуренти и
              възможности.
            </p>
            <div className="strategy__step">
              <div className="strategy__step__row" >
                <div className="carContainer">
                  <img src={yourbrand}></img>
                  <img src={car}></img>
                </div>
                <div className="row__box">ЦЕЛИ НА БРАНДА</div>
                <img className="row__img" src={arrowRight}></img>
                <div className="row__box">ЦЕЛИ НА БРАНДА</div>
                <img className="row__img" src={arrowRight}></img>
                <div className="row__box">ЦЕЛИ НА БРАНДА</div>
                <img className="row__img" src={arrowRight}></img>
                <div className="row__box">ЦЕЛИ НА БРАНДА</div>
                <img className="row__img" src={arrowRight}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
