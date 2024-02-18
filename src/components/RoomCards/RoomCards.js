import React, { useEffect } from "react";
import "./RoomCards.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import DynamicButton from "../DynamicButton/DynamicButton";
export default function RoomCards({img, price, title, description, minPeople, maxPeople, mirroredCard,beds,quadrature}) {
  
  return (
    <>
      <div class="room-card" data-animate-effect="fadeInUp">
        <figure style={mirroredCard ? { marginLeft: 0 } : {}}>
          <img src={img} alt="" class="img-fluid" />
        </figure>
        <div className={mirroredCard ? "caption caption-mirroed" : "caption"}>
          <h3>
            от {price} лева
            <span>/ вечер</span>
          </h3>
          <h4>{title}</h4>
          <p>{description}</p>
          <div class="row room-facilities">
            <div class="room-facilities__col">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faPerson} /> {minPeople}-{maxPeople}{" "}
                  души
                </li>
                <li>
                  <FontAwesomeIcon icon={faWifi} /> Безплатен Wifi
                </li>
              </ul>
            </div>
            <div class="room-facilities__col">
              <ul>
                {beds ? (
                  <li>
                    <FontAwesomeIcon icon={faBed} /> {beds+' '}Спални
                  </li>
                ) : (
                  <li>
                    <FontAwesomeIcon icon={faBed} /> Спалня
                  </li>
                )}
                <li>
                  <FontAwesomeIcon icon={faClock} /> {quadrature} кв.м.
                </li>
              </ul>
            </div>
          </div>
          <hr class="border-2" />
          <div class="info-wrapper">
            <DynamicButton text="Вижте повече" />
            <DynamicButton text="Изпрати запитване" isWhite={true} />
          </div>
        </div>
      </div>
    </>
  );
}
