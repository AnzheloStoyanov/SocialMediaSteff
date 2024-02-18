import React from "react";
import "./services.scss";
import DynamicButton from "../DynamicButton/DynamicButton";
import { Link } from "react-router-dom";

export default function ServicesContainer({content}) {
  // const content = [
  //   {
  //     image: "https://www.kraimoriepark.com/img/restaurant/1.jpg",
  //     desc: "Първа линия море",
  //     title: "Непосредствено до плажа",
  //     content: `Комплекс „Крайморие Парк“ е разположен на метри от красивата,
  //               отлично подържана, широка плажна ивица на Крайморие, в залива
  //               „Ченгене скеле“. Насладете се на спираща дъха гледка от удобството
  //               на своя балкон и усетете прохладния морски бриз, докато се
  //               наслаждавате на питието си, а децата Ви играят сред зеленината на
  //               градината.`,
  //   },
  //   {
  //     image: "https://www.kraimoriepark.com/img/spa/3.jpg",
  //     desc: "Спокойствие и прохлада",
  //     title: "Паркът",
  //     content: `Къщите на „Крайморие Парк“ са потопени в зеленината на гъста
  //               широколистна гора, което осигурява на нашите гости уединение,
  //               спокойствие и прохладна сянка в горещите летни дни. Комплекс
  //               „Крайморие Парк“ е Вашето място за релакс, възстановяване и
  //               зареждане с положителна енергия.`,
  //   },
  //   {
  //     image: "https://www.kraimoriepark.com/img/spa/5.jpg",
  //     desc: "Развлечения и забележителности",
  //     title: "Интересни дестинации в района",
  //     content: `Крайморие е най-малкият квартал на град Бургас. Той е разположен в
  //               залива Ченгене скеле на около 10 км южно от центъра на града и на
  //               20 км северно от гр. Созопол. В близост се намират някои от
  //               най-интересните културно-исторически и природни забележителности
  //               по Южното Черноморие.`,
  //   },
  // ];

  const renderContent = (item, index) => {
    const isEven = index % 2 === 0;
    const imgClass = isEven ? "img left" : "img";
    const containerClass = isEven
      ? "bg-cream valign"
      : "bg-cream p-0 order2 valign";
    const isLastElement = index === content.length - 1;

    return (
      <div
        key={index}
        className={`container-row ${isEven ? "row" : "reverse-row"}`}
      >
        <div
          className={`col-md-6 p-0 ${
            isEven
              ? "animate-boxX fadeInLeft animated"
              : "animate-boxX fadeInRight animated"
          }`}
          data-animate-effect={isEven ? "fadeInLeft" : "fadeInRight"}
        >
          <div className={imgClass}>
            <img src={item.image} alt="" />
          </div>
        </div>
        <div
          className={`col-md-6 p-0 ${containerClass}`}
          data-animate-effect={isEven ? "fadeInRight" : "fadeInLeft"}
        >
          <div className="content">
            <div className="cont text-left">
              <div className="info">
                <h6>{item.desc}</h6>
              </div>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
              {isLastElement && (
                <Link to="/entertainment">
                  <DynamicButton text="Вижте повече" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="services section-padding">
      <div className="services-container">
        {content.map((item, index) => renderContent(item, index))}
      </div>
    </section>
  );
}
