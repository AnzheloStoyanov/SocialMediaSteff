import React, { useEffect } from "react";
import rooms from "../../pages/Room/RoomInfo";
import ContactForm from "../ContactForm/ContactForm";
import "./roomCard.scss";

export default function RoomCard({ id }) {
	const room = rooms[id];

	useEffect(() => {
		console.log(room);
	}, [])

	return (
		<>
			<div className="room_card">
				<div class="container">
					<div class="room_wrapper">
						<div class="title_wrapper">
							<div class="title_wrapper__text">{room.title}</div>
						</div>
						<div class="room_info">
							<p class="room_info__description">{room.description}</p>
							<div className="room_info__wrapper">
								{room.apartmentFeatures.map((feature, index) => (
									<p className="room_info__feature" key={index}>{feature}</p>
								))}
							</div>
							<div class="image_gallery gallery">
								{room.images.map((img, index) => (
									<div class="col-md-6 gallery__item" key={index}>
										<div class="gallery__box">
											<div class="gallery__img">
												<img src={img} class="gallery__image" />
											</div>
										</div>
									</div>
								))}
							</div>
							<div className="general_room_info info">
								<div className="info__arival_leave">
									<div className="info__arival arrival">
										<div className="info__header">Настаняване</div>
										<div className="info__text">От 15:00 до 22:00 часа. За по-ранно настаняване – при възможност, попитайте на телефона за връзка.</div>
									</div>
									<div className="info__leave leave">
										<div className="info__header">Освобождаване</div>
										<div className="info__text">До 12:00 часа. За по-късно напускане, моля попитайте на рецепция.</div>
									</div>
								</div>
								<div className="info__wrapper">
									<div className="info__header">Деца</div>
									<div className="info__text">Всички деца са добре дошли. Настаняване на допълнително резтегателно легло и детска кошарка е безплатно.</div>
									<div className="info__header">Домашни любимци</div>
									<div className="info__text">Домашни любимци не са позволени в комплекса.</div>
								</div>
							</div>
						</div>
					</div>
					<ContactForm />
				</div>
			</div>
		</>
	)
}