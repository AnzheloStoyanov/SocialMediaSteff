import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";


import Image3 from "../../asstes/images/3.jpg";
import RoomOne from "../../asstes/images/roomOne.jpg";

import "./accommodatio.scss";
import RoomCards from "../../components/RoomCards/RoomCards";
import Sliders from "../../components/Sliders/Slider";

export default function Accommodation() {
	const location = useLocation();
    useEffect(() => {
      window.scrollTo({top: 0, left: 0 });
    }, [location]);

  const images = [
    {
      src: Image3,
      text: "АПАРТАМЕНТИ В КРАЙМОРИЕ ПАРК",
      header: "Настаняване",
    },
  ];
  return (
	<>	
	<Sliders images={images} height="70vh" navigate={"/"}/>
	<section className="accommodation-section">
		<RoomCards
			img={RoomOne} 
			price={150} 
			title='Апартамент с една спалня'
			description='В апартаментите с една спалня можете да се насладите на уют и отлично функционално разпределение, допълнено от стилно и модерно обзавеждане.'
			minPeople={1}
			maxPeople={3}
			quadrature={60}
		/>
		<RoomCards
			img={RoomOne} 
			price={250} 
			title='Апартамент с две спални'
			description='Просторни и комфортни, с много естествена светлина, апартаментите Ви потапят в атмосфера на релакс и приканват към пълноценна почивка.'
			minPeople={4}
			maxPeople={5}
			quadrature={100}
			beds={2}
			mirroredCard={true}
		/>
		<RoomCards
			img={RoomOne} 
			price={200} 
			title='ДЕЛУКС Апартамент с една спалня'
			description='Апартаментите Делукс очароват с простор, елегантен интериор и луксозно обзавеждане.'
			minPeople={2}
			maxPeople={3}
			quadrature={60}

		/>
		<RoomCards
			img={RoomOne} 
			price={300 } 
			title='ДЕЛУКС Апартамент с две спални'
			description='Потопете се в луксозната и приятна атмосфера на нашите 2-спални делукс апартаменти, които разполагат с допълнителни удобства, за да бъде престоят Ви възможно най-приятен.'
			minPeople={4}
			maxPeople={5}
			quadrature={100}
			beds={2}
			mirroredCard={true}
		/>
	</section>
	</>
  );
}
