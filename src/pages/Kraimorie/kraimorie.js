import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Image3 from "../../asstes/images/3.jpg";
import kraimorieAbout from "../../asstes/images/kraimorieAbout.jpg";
import AboutSection from "../../components/aboutSection/aboutSection";
import Sliders from "../../components/Sliders/Slider";
import ServicesContainer from "../../components/Services/ServicesContainer";

export default function Kraimorie() {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({top: 0, left: 0 });
  }, [location]);

  const images = [
    {
      src: Image3,
      text: "За комплекса",
      header: "Крайморие Парк",
    },
  ];
  const content = [
    {
      image: "https://www.kraimoriepark.com/img/restaurant/1.jpg",
      desc: "Първа линия море",
      title: "Непосредствено до плажа",
      content: `Комплекс „Крайморие Парк“ е разположен на метри от красивата,
                отлично подържана, широка плажна ивица на Крайморие, в залива
                „Ченгене скеле“. Насладете се на спираща дъха гледка от удобството
                на своя балкон и усетете прохладния морски бриз, докато се
                наслаждавате на питието си, а децата Ви играят сред зеленината на
                градината.`,
    },
    {
      image: "https://www.kraimoriepark.com/img/spa/3.jpg",
      desc: "Спокойствие и прохлада",
      title: "Паркът",
      content: `Къщите на „Крайморие Парк“ са потопени в зеленината на гъста
                широколистна гора, което осигурява на нашите гости уединение,
                спокойствие и прохладна сянка в горещите летни дни. Комплекс
                „Крайморие Парк“ е Вашето място за релакс, възстановяване и
                зареждане с положителна енергия.`,
    },
    {
      image: "https://www.kraimoriepark.com/img/spa/5.jpg",
      desc: "Развлечения и забележителности",
      title: "Интересни дестинации в района",
      content: `Крайморие е най-малкият квартал на град Бургас. Той е разположен в
                залива Ченгене скеле на около 10 км южно от центъра на града и на
                20 км северно от гр. Созопол. В близост се намират някои от
                най-интересните културно-исторически и природни забележителности
                по Южното Черноморие.`,
    },
  ];
  const kraymorieParkDescription = `
Комплекс „Крайморие Парк” се състои от 3 самостоятелни къщи, разделени на отделни апартаменти. Отличаващи се с модерна архитектура, къщите са сгушени в прегръдката на гъста широколистна гора, а в непосредствена близост е широката и отлично подържана плажна ивица. Уникалната комбинация от гора и море на „Крайморие парк“ Ви гарантира уединение, спокойствие и комфорт.  

  <br><br>Къща I е на първа линия до морето. В нея има 4 апартамента – 2 апартамента с две спални и хол и 2 апартамента с една спалня и хол. 
  
  <br>В Къща II има 5 апартамента – 1 апартамент с две спални и хол и 4 апартамента с една спалня и хол. 

  <br>Къща III се състои от 6 апартамента с една спалня и хол.
  
  <br><br>Всички апартаменти са модерно обзаведени, изцяло климатизирани и напълно оборудвани с всичко необходимо за един пълноценен и комфортен престой на Вас и Вашето семейство.
  
  <br>Комплексът разполага с обособен паркинг за 15 автомобила – 4 автомобила между Къща II и Къща III и 11 автомобила при Къща III.
  
  <br><br>За да осигурим необезпокояван престой на нашите гости, достъпът до „Крайморие Парк” е контролиран с карти и кодове.
`;
  return (
    <>
      <Sliders images={images} height="70vh" navigate={"/"}/>
      <AboutSection text={kraymorieParkDescription} image1={kraimorieAbout} />
      <div className="background-overlay">
        <div className="back-door"></div>
      </div>
      <ServicesContainer content={content}></ServicesContainer>
    </>
  );
}
