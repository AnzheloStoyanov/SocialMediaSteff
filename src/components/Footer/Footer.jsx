import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.scss";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../../asstes/images/Logo.png"

const Footer = () => {
  return (
    <footer>
      <div className="main-footer-container">
        <div class="row">
          <div class="col">
            <div class="footer-column footer-about">
              <img className="logo-gooter" src={logo}></img>
              <p class="footer-about-text">
                Заобиколен от китна растителност и в комбинация с първа линия
                море, Крайморие парк предоставя спокойствие и уют на своите
                клиенти.
              </p>
            </div>
          </div>
          <div class="col-middle">
            <div class="footer-column footer-explore">
              <h3 class="footer-title">БЪРЗИ ВРЪЗКИ</h3>
              <ul class="footer-explore-list">
                <li>
                  <a href='#aboutus'>За нас</a>
                </li>
                <li>
                  <a href="rooms.html">Настаняване</a>
                </li>
                <li>
                  <a href="prices.html">Цени</a>
                </li>
                <li>
                  <a href="gallery.html">Галерия</a>
                </li>
                <li>
                  <a href="contacts.html">Контакти</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="footer-column footer-contact">
              <h3 class="footer-title">Контакти</h3>
              <p class="footer-contact-text">гр. Бургас, кв. Крайморие</p>
              <div class="footer-contact-info">
                <p class="footer-contact-phone">
                  <span class="flaticon-call"><FontAwesomeIcon icon={faPhone} /></span> +359 899 77 75 75
                </p>
                <p class="footer-contact-mail">kraimoriepark@gmail.com</p>
              </div>
              <div class="footer-contact-social-list">
                <a
                  href="https://www.facebook.com/profile.php?id=100081960582239"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="https://www.instagram.com/kraimorie_park/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-line-footer">
        <p class="footer-bottom-copy-right">
          © 2023 | Изработка на сайт:
          <a href="https://www.diesweb.eu/" target="_blank">
            Дигитална агенция STENZHI
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
