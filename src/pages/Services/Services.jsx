import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import lamp from "../../asstes/images/lamp.png";
import car from "../../asstes/images/car.png";
import yourbrand from "../../asstes/images/yourbrand.png";
import arrowRight from "../../asstes/images/arrow.png";
import tunder from "../../asstes/images/tunder.png";
import finalFlag from "../../asstes/images/finalFlag.png";
import camera from "../../asstes/images/camera.png";
import yourbrandIsHere from "../../asstes/images/youBrandIsHere.png";

import "./Services.scss";
import ServicesContainer from "../../components/Services/ServicesContainer";

export default function Services() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);
  return (
    <>
      <div className="services-page">
        <div className="home-services">
          <div className="home-services-title">
            <img src={tunder}></img>
            <h1 data-aos-duration="1000">УСЛУГИ</h1>
          </div>
          <ServicesContainer />
        </div>
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
              <div className="strategy__step__row">
                <div className="carContainer">
                  <img src={yourbrand}></img>
                  <img src={car}></img>
                </div>
                <div className="celi_na_branda">
                  <div className="row__box">ЦЕЛИ НА БРАНДА</div>
                  <img className="row__img" src={arrowRight}></img>
                </div>
                <div className="celi_na_branda">
                  <div className="row__box">ТАРГЕТ АУДИТОРИЯ</div>
                  <img className="row__img" src={arrowRight}></img>
                </div>
                <div className="celi_na_branda">
                  <div className="row__box">
                    <span>ЛОКАЛНИ и ГЛОБАЛНИ</span> КОНКУРЕНТИ
                  </div>
                  <img className="row__img" src={arrowRight}></img>
                </div>
                <div className="celi_na_branda celi_na_branda--down">
                  <div className="row__box">ЗВУЧЕНЕ НА БРАНДА В TikTok</div>
                  <img className="row__img" src={arrowRight}></img>
                </div>
              </div>
              <div className="strategy__step__row">
                <div className="carContainer">
                  <img src={finalFlag}></img>
                </div>

                <div className="celi_na_branda celi_na_branda--left">
                  <div className="row__box row__box--posting ">
                    ПОСТИНГ
                    <br /> ПЛАН
                  </div>
                  <img className="row__img" src={arrowRight}></img>
                </div>
                <div className="celi_na_branda celi_na_branda--left">
                  <div className="row__box">ВИДЕО КОНЦЕПЦИЯ</div>
                  <img className="row__img" src={arrowRight}></img>
                </div>
                <div className="celi_na_branda celi_na_branda--left">
                  <div className="row__box">ВИЗИЯ И ОФОРМЛЕНИЕ</div>
                  <img className="row__img" src={arrowRight}></img>
                </div>
                <div className="celi_na_branda celi_na_branda--left">
                  <div className="row__box">ДОБРИ ПРАКТИКИ</div>
                  <img className="row__img" src={arrowRight}></img>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="services-page__content_creation">
          <div>
            <div className="creation__title">
              <img src={camera}></img>
              <h1>Content Creation</h1>
              <h3>Създаване на съдържание</h3>
            </div>
            <p>
              Видео съдържанието става все по-важен елемент от маркетинг микса
              на всеки един бранд, тъй като е способен да даде много повече
              информация и стойност на аудиторията му. Потребителите започват да
              търсят и разчитат все повече на този формат, когато се ангажират с
              любимите си профили в социалните мрежи. Именно заради всичко това,
              създаването на видео съдържание е основната услуга на Social Media
              Steff, защото ние вярваме, че content is king, but video is the
              key.
            </p>
            <div className="content_creation__innerContainer">
              <div className="content_creation__innerContainer_wrapper">
                <div className="content_creation__innerContainer_luch"/>
              </div>
              <img src={yourbrandIsHere}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
