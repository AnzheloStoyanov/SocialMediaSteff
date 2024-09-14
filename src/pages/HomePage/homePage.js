import React, { useEffect, useRef, useState } from "react";
import "./homePage.scss";
import hand from "../../asstes/images/hand.png";
import DynamicButton from "../../components/DynamicButton/DynamicButton";
import tunder from "../../asstes/images/tunder.png";
import { Helmet } from 'react-helmet-async';  // Import Helmet for SEO
import save from "../../asstes/images/save.png";
import playResults from "../../asstes/images/playResults.png";
import resultsHeart from "../../asstes/images/resultsHeart.png";
import comments from "../../asstes/images/comments.png";
import rock from "../../asstes/images/rock.png";
import socialMediaSteff from "../../asstes/images/socialMediaSteff.jpg";
import BrandSlider from "../../components/BrandSlider/BrandSlider";
import video from "../../asstes/images/ssstik.io_1705837693230.mp4";
import video2 from "../../asstes/images/video2.mp4";
import video3 from "../../asstes/images/video3.mp4";
import video4 from "../../asstes/images/video4.mp4";
import shortFormVideo from "../../asstes/images/shortFormVideo.mp4";
import whyTikTokVideo from "../../asstes/images/whyTikTok.mp4";
import mainVideo from "../../asstes/images/mainVideo.mp4";
import TypewriterComponent from "typewriter-effect";
import AOS from "aos";
import circle from "../../asstes/images/socailMediaSteffBanner.jpg";
import "aos/dist/aos.css";
import ServicesContainer from "../../components/Services/ServicesContainer";
import ContactForm from "../../components/ContactForm/ContactForm";
import { HashLink as Link } from "react-router-hash-link";
import TikTokComponentResults from "../../components/TikTokComponentResults/TikTokComponentResults";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const inputRef = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const brands = [
    { name: "Brand 1", logo: "brand1.png" },
    { name: "Brand 2", logo: "brand2.png" },
    { name: "Brand 3", logo: "brand3.png" },
    // Add more brands as needed
  ];

  return (
    <section className="home-page-section">
      <Helmet>
        <title>Social Media Steff - TikTok Маркетинг Агенция</title>
        <meta
          name="description"
          content="ТикТок агенция Social Media Steff: Помагаме на бизнеса да увеличи разпознаваемостта си, достигне нова аудитория и постигне отлични резултати с качествено видео съдържание."
        />
        <meta name="keywords" content="тикток, маркетинг, агенция, социални медии, видео маркетинг" />
        <meta property="og:title" content="Social Media Steff - TikTok Маркетинг Агенция" />
        <meta property="og:description" content="Помагаме на бизнесите да стъпят на TikTok сцената, да достигнат нова аудитория и да повишат резултатите си." />
        <meta property="og:image" content={socialMediaSteff} />
        <meta property="og:url" content="https://www.socialmediasteff.com" />
        <meta name="twitter:title" content="Social Media Steff - TikTok Маркетинг Агенция" />
        <meta name="twitter:description" content="Бутикова видео маркетинг агенция, която помага на брандове да създадат качествено TikTok съдържание и да достигнат нова аудитория." />
        <meta name="twitter:image" content={socialMediaSteff} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Social Media Steff",
              "url": "https://www.socialmediasteff.com",
              "logo": "https://www.socialmediasteff.com/static/media/Logo.6dfa703fbd2ad749ec78.png",
              "sameAs": [
                "https://www.facebook.com/socialmediasteff",
                "https://www.instagram.com/socialmediasteff",
                "https://www.linkedin.com/company/socialmediasteff"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-123-4567",
                "contactType": "Customer Service",
                "areaServed": "US",
                "availableLanguage": "English"
              }
            }
          `}
        </script>
      </Helmet>
      <div className="homepage-container">
        <div>
          {!isMobile && (
            <>
              <p>full service TikTok агенция</p>
              <div className="typewriter-style"></div>
              <h4 className="mainTitle">БИЗНЕСЪТ ТИ</h4>
              <div>
                <h6>има място в</h6>
                <h4 className="tiktok">
                  {" "}
                  <TypewriterComponent
                    options={{
                      strings: ["tiktok"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h4>
              </div>
            </>
          )}
          <div className="what-we-do">
            <p>Помагаме на бизнесите да стъпят на TikTok сцената, за да:</p>
            <p>
              <img src={hand} alt="Тик ток маркетинг ръчичка" />
              увеличат разпознаваемостта на бранда си
            </p>
            <p>
              <img src={hand} alt="Тик ток маркетинг агенция"/>
              достигнат до нова аудитория
            </p>
            <p>
              <img src={hand} alt="Тик ток маркетинг ръка" />
              изградят лоялна общност
            </p>
            <p>
              <img src={hand} alt="Тик ток маркетинг стъпка" />
              повишат резултатите си
            </p>
            <Link to="#work-with-us">
              <DynamicButton text="Работи с нас" />
            </Link>
          </div>
        </div>
        <video playsInline autoplay="autoplay" loop muted>
          <source src={mainVideo} type="video/mp4" />
        </video>
        {isMobile && (
          <>
            {" "}
            <div className="ima-mqsto">
              <h6>има място в</h6>
              <h4 className="tiktok">
                {" "}
                <TypewriterComponent
                  options={{
                    strings: ["tiktok"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h4>
            </div>
            <h4 className="mainTitle">БИЗНЕСЪТ ТИ</h4>
            <p>full service TikTok агенция</p>
          </>
        )}
      </div>
      <div className="home-page-more-container">
        <p className="home-page-more">
          Повече <strong>органино съдържание.</strong> Повече{" "}
          <strong>стойност.</strong>Повече{" "}
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
          <video playsInline autoplay="autoplay" loop muted>
            <source src={whyTikTokVideo} type="video/mp4" />
          </video>
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
      <>
        <div className="short-form-container">
          <h1>SHORT FORM ВИДЕО</h1>
          <h3>КАКВО СЕДИ ЗАД КРАЙНИЯ РЕЗУЛТАТ</h3>
          <div className="short-form-relative">
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="left-side-pointers"
            >
              <div className="poiners poiners-two">
                <h5>ИДЕИ И СКРИПТИРАНЕ</h5>
                <div className="ring">2</div> <div className="stick"></div>
              </div>

              <div className="poiners poiners-four">
                <h5>ОБРАБОТКА И COPYWRITING</h5>
                <div className="ring">4</div> <div className="stick"></div>
              </div>
              <div className="poiners poiners-six">
                <h5>АНАЛИЗ</h5>
                <div className="ring">6</div> <div className="stick"></div>
              </div>
            </div>
            <div className="short-form-video">
              <video playsInline autoplay="autoplay" loop muted>
                <source src={shortFormVideo} type="video/mp4" />
              </video>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="right-side-pointers"
            >
              <div className="poiners poiners-one">
                <div className="stick"></div>
                <div className="ring">1</div>
                <h5>КРЕАТИВНА СТРАТЕГИЯ</h5>
              </div>

              <div className="poiners poiners-three">
                <div className="stick"></div>
                <div className="ring">3</div>
                <h5>СНИМАЧЕН ДЕН</h5>
              </div>

              <div className="poiners poiners-five">
                <div className="stick"></div>
                <div className="ring">5</div>
                <h5>УПРАВЛЕНИЕ НА ПРОФИЛА</h5>
              </div>
            </div>
          </div>
        </div>
        <div id="services" className="home-services">
          <div className="home-services-title">
            <img src={tunder} alt="Тик ток маркетинг сеткавица"></img>
            <h1 data-aos="fade-up" data-aos-duration="1000">
              УСЛУГИ
            </h1>
          </div>
          <ServicesContainer />
        </div>
        <div id="aboutus" className="why-social-media">
          <h4 data-aos="fade-up" data-aos-duration="1000">
            ЗАЩО <h1> SOCIAL MEDIA STEFF?</h1>
          </h4>
          <p data-aos="fade-up" data-aos-duration="1000">
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
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            src={socialMediaSteff}
          ></img>
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
        <TikTokComponentResults/>
        <div id="work-with-us" className="home-page-contant-form">
          <h1 data-aos="fade-up" data-aos-duration="1000">
            РАБОТИ С НАС
          </h1>
          <p data-aos="fade-up" data-aos-duration="1000">
            Попълни долните полета с нужната информация, която да ни запознаем с
            бранда ти предварително. След като получим запитването, ние ще се
            свържем с теб, за да организираме опознавателна среща, в която да
            разберем как можем да сме ти от полза.
          </p>
          <ContactForm data-aos="fade-up" data-aos-duration="1000" />
        </div>
      </>
    </section>
  );
};

export default HomePage;
