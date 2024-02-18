import React, { useEffect, useRef, useState } from "react";
import "./homePage.scss";
import bahur from "../../asstes/images/bahur.png";
import heart from "../../asstes/images/heart.png";
import whytiktok from "../../asstes/images/whytiktok.png";
import hand from "../../asstes/images/hand.png";
import shortForm from "../../asstes/images/shortForm.png";
import DynamicButton from "../../components/DynamicButton/DynamicButton";
import tunder from "../../asstes/images/tunder.png";
import lamp from "../../asstes/images/lamp.png";
import camera from "../../asstes/images/camera.png";
import voice from "../../asstes/images/voice.png";
import girl from "../../asstes/images/gitlWithPhone.png";
import rock from "../../asstes/images/rock.png";
import socialMediaSteff from "../../asstes/images/socialMediaSteff.jpg";
import BrandSlider from "../../components/BrandSlider/BrandSlider";
import video from "../../asstes/images/ssstik.io_1705837693230.mp4";
import video2 from "../../asstes/images/video2.mp4";
import video3 from "../../asstes/images/video3.mp4";
import video4 from "../../asstes/images/video4.mp4";
const HomePage = () => {
  const inputRef = useRef();
  const brands = [
    { name: "Brand 1", logo: "brand1.png" },
    { name: "Brand 2", logo: "brand2.png" },
    { name: "Brand 3", logo: "brand3.png" },
    // Add more brands as needed
  ];

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
          <div className="what-we-do">
            <p>Помагаме на бизнесите да стъпят на TikTok сцената, за да:</p>
            <p>
              <img src={hand} />
              увеличат разпознаваемостта на бранда си
            </p>
            <p>
              <img src={hand} />
              достигнат до нова аудитория
            </p>
            <p>
              <img src={hand} />
              изградят лоялна общност
            </p>
            <p>
              <img src={hand} />
              повишат резултатите си
            </p>
            <DynamicButton text="Работи с нас" />
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
        <div className="short-form-relative">
          <div className="short-form-video">
            <img className="short-form-img" src={shortForm} />
            <div className="poiners poiners-one">
              <div className="stick"></div>
              <div className="ring">1</div>
              <h5>КРЕАТИВНА СТРАТЕГИЯ</h5>
            </div>
            <div className="poiners poiners-two">
              <h5>ИДЕИ И СКРИПТИРАНЕ</h5>
              <div className="ring">2</div> <div className="stick"></div>
            </div>
            <div className="poiners poiners-three">
              <div className="stick"></div>
              <div className="ring">3</div>
              <h5>СНИМАЧЕН ДЕН</h5>
            </div>
            <div className="poiners poiners-four">
              <h5>ОБРАБОТКА И COPYWRITING</h5>
              <div className="ring">4</div> <div className="stick"></div>
            </div>
            <div className="poiners poiners-five">
              <div className="stick"></div>
              <div className="ring">5</div>
              <h5>УПРАВЛЕНИЕ НА ПРОФИЛА</h5>
            </div>
            <div className="poiners poiners-six">
              <h5>АНАЛИЗ</h5>
              <div className="ring">6</div> <div className="stick"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-services">
        <div className="home-services-title">
          <img src={tunder}></img>
          <h1>УСЛУГИ</h1>
        </div>
        <div className="home-services-main-container">
          <div>
            <h6>Strategy & Conception</h6>
            <p>
              Всяка стратегия е изцяло персонализирана за нуждите и целите на
              твоя бранд въз основа на доказано работещи практики в платформата
              TikTok.
            </p>
            <div className="spacer"></div>
            <div className="big-pink">
              <div className="small-pink">
                <img className="lamp" src={lamp}></img>
              </div>
            </div>
          </div>
          <div>
            <div className="big-yellow">
              <div className="small-yellow">
                <img className="lamp" src={camera}></img>
              </div>
            </div>
            <div className="spacer-yellow"></div>
            <h6>Content Creation</h6>
            <p>
              Съдържанието, което създаваме за всеки бранд е винаги съобразено с
              таргет аудиторията, а не с "какво ще се хареса на масата".
            </p>
          </div>
          <div>
            <h6>Creator Marketing</h6>
            <p>
              Ние сме връзката между бранда ти и новото поколение крийтъри,
              които аудиторията харесва и следи.
            </p>
            <div className="spacer"></div>
            <div className="big-pink">
              <div className="small-pink">
                <img className="lamp" src={girl}></img>
              </div>
            </div>
          </div>
          <div>
            <div className="big-yellow">
              <div className="small-yellow">
                <img className="lamp" src={voice}></img>
              </div>
            </div>
            <div className="spacer-yellow"></div>
            <h6>Content Creation</h6>
            <p>
              Съдържанието, което създаваме за всеки бранд е винаги съобразено с
              таргет аудиторията, а не с "какво ще се хареса на масата".
            </p>
          </div>
        </div>
      </div>
      <div className="why-social-media">
        <h4>
          ЗАЩО <h1> SOCIAL MEDIA STEFF?</h1>
        </h4>
        <p>
          Social Media Steff е бутикова видео маркетинг агенция, която създава
          <strong>качествено видео съдържание</strong> за различни брандове с
          цел то да достига
          <strong>до правилната аудитория абсолютно органично.</strong> <br />
          Основното ни предимство е, че{" "}
          <strong>доставяме цялостна услуга</strong> - от създаване на
          фундаментална креативна стратегия през предложения за винаги trendy
          видеа до готов за публикуване краен продукт, който потребителите да
          забележат.
          <br />
          За нас е важно да представим твоят бранд пред правилната аудитория
          чрез правилното съдържание. <br />
          <strong>Без ненужен cringe.</strong>
        </p>
        <img src={socialMediaSteff}></img>
      </div>
      <div className="home-page-banner">
        <div>
          <h1>20М+</h1>
          <h3>ГЛЕДАНИЯ</h3>
        </div>
        <div>
          <h3>НАД</h3>
          <h1>1000</h1>
          <h3>СЪЗДАДЕНИ</h3>
          <h3>ВИДЕА</h3>
        </div>
        <div>
          <h1>900K+</h1>
          <h3>ХАРЕСВАНИЯ</h3>
        </div>
      </div>
      <div className="home-page-brands">
        <div className="brands-title">
          <h1>БРАНДОВЕ,</h1>
          <h3>КОИТО НИ СЕ ДОВЕРИХА</h3>
        </div>
        <BrandSlider brands={brands}></BrandSlider>
      </div>
      <div className="home-page-results">
        <div className="home-page-results-title">
          <img src={rock}></img>
          <h1>TIKTOK</h1>
          <h3>РЕЗУЛТАТИ</h3>
         
        </div>
        <div className="video-container">
        <video className="home-page-results-video" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
          <video className="home-page-results-video" autoPlay loop muted>
            <source src={video2} type="video/mp4" />
          </video>
          <video className="home-page-results-video" autoPlay loop muted>
            <source src={video3} type="video/mp4" />
          </video>
          <video className="home-page-results-video" autoPlay loop muted>
            <source src={video4} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default HomePage;
