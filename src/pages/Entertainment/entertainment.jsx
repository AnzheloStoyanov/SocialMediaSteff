import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";


import Image3 from "../../asstes/images/3.jpg";
import RoomOne from "../../asstes/images/roomOne.jpg";

import "./entertainment.scss";
import RoomCards from "../../components/RoomCards/RoomCards";
import Sliders from "../../components/Sliders/Slider";
import ServicesContainer from "../../components/Services/ServicesContainer";

export default function Entertainment() {
	const location = useLocation();
    useEffect(() => {
      window.scrollTo({top: 0, left: 0 });
    }, [location]);

  const images = [
    {
      src: Image3,
      text: "ИНТЕРЕСНИ ДЕСТИНАЦИИ В РАЙОНА",
      header: "Развлечения и забележителности",
    },
  ];
  const content = [
	{
	  image: "https://www.kraimoriepark.com/img/spa/6.jpg",
	  desc: "",
	  title: "Защитена местност „Пода“",
	  content: `В близост до Крайморие се намира защитената местност „Пода“, където можете да наблюдавате 273 вида птици, в зависимост от сезона. Отделете си ден за незабравими срещи с птичето многообразие на защитената местност по ваш избор – от терасата на природозащитен център „Пода“ или при разходка по посетителската пътека. Ще имате на разположение бинокъл, далекогледна тръба и прекрасни познавачи на птиците, които ще ви разкажат интересни факти за тях. Повече информация ще намерите на bspb.org.`,
	},
	{
	  image: "https://www.kraimoriepark.com/img/spa/7.jpg",
	  desc: "",
	  title: "Остров Света Анастасия",
	  content: `Лекарна, предлагащи чудодейни билки и отвари, манастирска килия от Средновековието, в която може да пренощувате, ресторант с автентични бургаски ястия по стари рецепти… и всичко това на най-романтичното място в Бургаския залив – Остров Света Анастасия. До там стигате с корабче, на което сте се качили от "Магазия 1" (непосредствено преди Морска гара - Бургас). Островът е атрактивна туристическа дестинация, идеална за прекарване на интересен и пълноценен ден със семейството или за романтична разходка! Повече информация ще намерите на http://anastasia-island.com.`,
	},
	{
	  image: "https://www.kraimoriepark.com/img/spa/8.jpg",
	  desc: "",
	  title: "Културно-туристически комплекс Ченгене скеле",
	  content: `Ченгене скеле, Рибарско пристанище или просто Ченгенето – това е малко селище на 15 км южно от Бургас, пазещо рибарските традиции и до днес. Разположените в туристическия комплекс експозиционни къщички повеждат на едно пътешествие из историята на Черно море, рибарските обичаи и бит. Тук могат да се наблюдават демонстрации на плетене на мрежи, заплитане на въжета и морски възли, дегустация на традиционни храни и представяне на техните поверия и легенди. Част от комплекса са малък ресторант и кафе-клуб, където могат да се опитат специалитети по стари рецепти и освежаващи напитки. Многофункционална сграда и амфитеатър предлагат условия за събития от всякакъв характер на открито и закрито. Любителите на морските забавления могат да посетят малкия плаж до комплекса или да се отправят на приключение по море с корабче от близката лодкостоянка на фона едни от най-красивите залези в Бургаския залив.`,
	},
	{
		image: "https://www.kraimoriepark.com/img/spa/9.jpg",
		desc: "",
		title: "Античната и средновековна крепост на полуостров Форос",
		content: `Ако искате да се докоснете до историческия дух на Бургас и неговите дълго-пазени най-стари тайни, тук е мястото, което ще ви пренесе стотици години назад... Полуостров Форос се намира в местността Пода (в квартал Крайморие на Бургас). През 2008 г. са проведени за първи път археологически проучвания, при които се установява, че тук все още има запазени останки от изгубения град, предшественик и символ на град Бургас – античната и средновековна крепост и пристанище Бургос / Порос. Tук, на Форос, археолозите откриха останки от митичната древна кула, изобразена на герба на Бургас. Находката доказва, че градът има поне 20-вековна история. Повече информация за местоположението открийте тук: https://www.gotoburgas.com/bg/places-to-go/view/19.`,
	  },
	  {
		image: "https://www.kraimoriepark.com/img/spa/10.jpg",
		desc: "",
		title: "Беглик таш - светилището на траките",
		content: `Мегалитният комплекс Беглик таш се намира на 5 км от гр. Приморско, в самия край на Странджа планина, в буферната зона на резервата "Ропотамо". Това е ансамбъл от скали, който се е използвал за светилище в продължение на 2000 години, от XV век преди Христа докъм IV вeк. Наричат Беглик таш "българския Стоунхендж", не само защото представлява специфично подредени камъни в кръг върху скална повърхност, но и заради функциите които се вярва че е изпълнявало, а именно – слънчев часовник, календар и храм. Бегликташ е една от най-посещаваните забележителности, не само заради уникалната си структура, но и заради мистерията, в която е обвита.`,
	  },
  ];
  return (
	<>

	<Sliders images={images} height="70vh" navigate={"/"}/>
	<ServicesContainer content={content}></ServicesContainer>

	</>
  );
}
