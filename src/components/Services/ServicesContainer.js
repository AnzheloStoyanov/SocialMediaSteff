import React,{useEffect, useState} from "react";
import "./services.scss";

import lamp from "../../asstes/images/lamp.png";
import camera from "../../asstes/images/camera.png";
import voice from "../../asstes/images/voice.png";
import girl from "../../asstes/images/gitlWithPhone.png";

export default function ServicesContainer({content}) {
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
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="home-services-main-container">
    <div>
      <h6>Strategy & Conception</h6>
      <p>
        Всяка стратегия е изцяло персонализирана за нуждите и целите на
        твоя бранд въз основа на доказано работещи практики в
        платформата TikTok.
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
        Съдържанието, което създаваме за всеки бранд е винаги съобразено
        с таргет аудиторията, а не с "какво ще се хареса на масата".
      </p>
    </div>
    {!isMobile && 
    <div className="reverse-col">
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
  }
  {isMobile && 
    <div className="reverse-col">
   
    <p>
      Ние сме връзката между бранда ти и новото поколение крийтъри,
      които аудиторията харесва и следи.
    </p>
    <h6>Creator Marketing</h6>
    <div className="spacer"></div>
    <div className="big-pink">
      <div className="small-pink">
        <img className="lamp" src={girl}></img>
      </div>
    </div>
  </div>
  }
    {!isMobile &&
     <div className="reverse-col">
     <div className="big-yellow">
       <div className="small-yellow">
         <img className="lamp" src={voice}></img>
       </div>
     </div>
     <div className="spacer-yellow"></div>
     <h6>Brand Consultation</h6>
     <p>
       Ако брандът ти има нужда просто от насока, ние сме винаги насреща за разговор и планиране заедно.
     </p>
   </div>
    } 
    {isMobile &&
      <div className="reverse-col">
      <div className="big-yellow">
        <div className="small-yellow">
          <img className="lamp" src={voice}></img>
        </div>
      </div>
      <div className="spacer-yellow"></div>
    
      <p>
        Ако брандът ти има нужда просто от насока, ние сме винаги насреща за разговор и планиране заедно.
      </p>
      <h6>Brand Consultation</h6>
    </div>
     }
  
  </div>
  );
}
