import React, { useEffect, useRef, useState } from "react";
import "./homePage.scss";
import bahur from "../../asstes/images/bahur.png";
import heart from "../../asstes/images/heart.png";
import whytiktok from "../../asstes/images/whytiktok.png";
const HomePage = () => {
  const inputRef = useRef();

  return (
    <>
      <div className="homepage-container">
        <div>
          <img className="heart" src={heart}></img>
          <p>full service TikTok агенция</p>
          <h4 className="mainTitle">БИЗНЕСЪТ ТИ</h4>
          <div>
            <h6>има място в</h6>
            <h4 className="tiktok">tiktok</h4>
          </div>
        </div>
        <img src={bahur}></img>
      </div>
      <div className="home-page-more-container">
        <p className="home-page-more">
          Повече <strong>органино съдържание.</strong> Повече{" "}
          <strong>стройност.</strong>Повече{" "}
          <strong>ангажирана аудитория.</strong>
        </p>
      </div>
      <div class="container-shape">
        <div class="round-bottom"></div>
      </div>
      <div className="why-tiktok">
        <h1>
          Защо <strong> TikTok?</strong>
        </h1>
        <div className="why-tiktok-inner-container">
          <img src={whytiktok}></img>
          <div className="why-tiktok-righ-side">
            <h3>
              {" "}
              <strong>А</strong>УДИТОРИЯ
            </h3>
            <p>
              Това е единствената социална мрежа, с която можеш да достигнеш до
              стотици хиляди потребители, въпреки че те следват 0.
            </p>
            <h3>
              <strong>А</strong>ВТЕНТИЧНОСТ
            </h3>
            <p>
              Платформата дава възможност на брандовете да излязат от
              корпоративната рамка и да разкажат историите си по автентичен
              начин.
            </p>
            <h3>
              <strong>А</strong>ЛГОРИТЪМ
            </h3>
            <p>
              Алгоритъмът е базиран на интереси и ще работи в услуга на бранда,
              намирайки правилната аудитория, която да се ангажира със
              съдържанието му.
            </p>
            <h3>
              <strong> А</strong>ДАПТИВНОСТ
            </h3>
            <p>
              Native жителите на платформата определено оценяват, когато
              брандовете са адаптивни и бързо хванат съобщението "make TikToks,
              not ads".
            </p>
          </div>
        </div>
      </div>
      <div className="short-form-container">
        <h1>SHORT FORM ВИДЕО</h1>
        <h3>КАКВО СЕДИ ЗАД КРАЙНИЯ РЕЗУЛТАТ</h3>
      </div>
    </>
  );
};

export default HomePage;
