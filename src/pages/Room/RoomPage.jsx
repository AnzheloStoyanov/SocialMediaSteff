
import { useParams, useLocation } from "react-router-dom";
import { React, useEffect } from "react";
import RoomCard from "../../components/RoomCardTest/RoomCard";
import Sliders from "../../components/Sliders/Slider";
import Image3 from "../../asstes/images/3.jpg";



const RoomPage = () => {

	const { id } = useParams();
	const location = useLocation();
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0 });
	}, [location]);

	const images = [
		{
			src: Image3,
			text: "НАШАТА ОФЕРТА ЗА НЕЗАБРАВИМО ЛЯТО",
			header: "Цени",
		},
	];

	return (<>
		<Sliders images={images} height="70vh" navigate={"/"} />
		<section className="price-section">
			<RoomCard id={id}></RoomCard>
		</section>
	</>

	);
};

export default RoomPage;
