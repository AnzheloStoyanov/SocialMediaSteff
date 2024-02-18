import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faEnvelope,faMapPin } from "@fortawesome/free-solid-svg-icons";
import Image3 from "../../asstes/images/3.jpg";

import "./contact.scss";
import Sliders from "../../components/Sliders/Slider";
import ContactForm from "../../components/ContactForm/ContactForm";
export default function Contact() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);

  const images = [
    {
      src: Image3,
      text: "СВЪРЖЕТЕТЕ СЕ С НАС",
      header: "Контакти",
    },
  ];

  return (
    <>
      <Sliders images={images} height="70vh" navigate={"/"} />
	  <section class="contact section-padding-contact">
        <div class="container">
            <div class="row">
                <div class="form-content">
                    <h3>Крайморие Парк</h3>
                    <p>Затворен комплекс от къщи с апартаменти, завладяващ с уникалната си комбинация парк и море. Заобиколен от китна растителност и в комбинация с първа линия море, предоставя спокойствие и уют на своите клиенти. </p>
                    <div class="reservations">
					<FontAwesomeIcon className="icon" icon={faPhone}></FontAwesomeIcon> 
                        <div class="text">
                            <p>За резервации</p> <a href="tel:00359899777575">+359 899 77 75 75</a>
                        </div>
                    </div>
                    <div class="reservations">
					<FontAwesomeIcon className="icon" icon={faEnvelope} />
                        <div class="text">
                            <p>Email</p> <a href="mailto:kraimoriepark@gmail.com">kraimoriepark@gmail.com</a>
                        </div>
                    </div>
                    <div class="reservations">
					<FontAwesomeIcon className="icon" icon={faMapPin} />
                        <div class="text">
                            <p>Адрес</p> <a href="https://goo.gl/maps/mwnATFFBQieFSmzz8" target="_blank">ул. "Морска Перла" № 3, кв. Крайморие, гр. Бургас</a>
                        </div>
                    </div>
                </div>
            <ContactForm className="contact-form"></ContactForm>
            </div>
            <div class="row">
                <div class="map" data-animate-effect="fadeInUp">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1324.191990574453!2d27.496223034154777!3d42.444132935349074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6eb760f60caad%3A0xaa71383f11640d40!2z0JrRgNCw0LnQvNC-0YDQuNC1INCf0LDRgNC6IC8gS3JhaW1vcmllIFBhcms!5e0!3m2!1sen!2sbg!4v1678442462124!5m2!1sen!2sbg" width="100%" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
