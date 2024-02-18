import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Image3 from "../../asstes/images/3.jpg";
import RoomOne from "../../asstes/images/roomOne.jpg";

import "./prices.scss";
import RoomCards from "../../components/RoomCards/RoomCards";
import Sliders from "../../components/Sliders/Slider";

export default function Prices() {

    const location = useLocation();
    useEffect(() => {
      window.scrollTo({top: 0, left: 0 });
    }, [location]);

  const images = [
    {
      src: Image3,
      text: "НАШАТА ОФЕРТА ЗА НЕЗАБРАВИМО ЛЯТО",
      header: "Цени",
    },
  ];
  return (
    <>
      <Sliders images={images} height="70vh" navigate={"/"} />
      <section className="price-section">
        <div  className="price-container">
          <table>
            <tbody>
              <tr>
                <td>-</td>
                <td>
                  <b>Април и Май</b>
                </td>
                <td>
                  <b>Юни</b>
                </td>
                <td>
                  <b>Юли и Авуст</b>
                </td>
                <td>
                  <b>Септември</b>
                </td>
                <td>
                  <b>Октомври</b>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Апартамент с една спалня</b>
                </td>
                <td>150 лева</td>
                <td>170 лева</td>
                <td>200 лева</td>
                <td>170 лева</td>
                <td>150 лева</td>
              </tr>
              <tr>
                <td>
                  <b>Апартамент с две спални</b>
                </td>
                <td>250 лева</td>
                <td>300 лева</td>
                <td>350 лева</td>
                <td>300 лева</td>
                <td>250 лева</td>
              </tr>
              <tr>
                <td>
                  <b>Апартамент с една спалня ДЕЛУКС</b>
                </td>
                <td>200 лева</td>
                <td>220 лева</td>
                <td>250 лева</td>
                <td>220 лева</td>
                <td>200 лева</td>
              </tr>
              <tr>
                <td>
                  <b>Апартамент с две спални ДЕЛУКС</b>
                </td>
                <td>300 лева</td>
                <td>350 лева</td>
                <td>400 лева</td>
                <td>350 лева</td>
                <td>300 лева</td>
              </tr>
            </tbody>
          </table>
          <p>
            {" "}
            • Настаняване – от 15:00 до 22:00. За по-ранно настаняване – при
            възможност, попитайте на телефона за връзка.
            <br />• Напускане – до 12:00. За по-късно напускане, моля попитайте
            на рецепция.
            <br />• Минимална заетост за м. Май, Юни и м. Септември - 2 нощи.
            <br />• Минимална заетост за м. Юли и м. Август - 3 нощи.
            <br />• В цената на нощувката е включен паркинг.
            <br />• Максималният капацитет на апартамент с една спалня и хол е 2
            възрастни и 2 деца до 12 години или 3 възрастни.
            <br />• Максималният капацитет на апартамент с две спални и хол е 4
            възрастни и 2 деца до 12 години или 5 възрастни.
            <br />• Всички деца са добре дошли. Настаняване на допълнително
            резтегателно легло и детска кошарка е безплатно.
            <br />• Домашни любимци не са позволени в комплекса.
          </p>
        </div>
      </section>
    </>
  );
}
