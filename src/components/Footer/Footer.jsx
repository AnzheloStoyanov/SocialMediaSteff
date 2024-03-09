import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.scss";
import { faFacebookF, faInstagram, faTiktok,faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
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
              Social Media Steff е бутикова видео маркетинг агенция, която помага на бизнеси в различни ниши да достигнат до правилната аудитория в TikTok, създавайки интересно и стойностно съдържание.
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
                  <a href="rooms.html">Резултати</a>
                </li>
                <li>
                  <a href="prices.html">Услуги</a>
                </li>
                <li>
                  <a href="gallery.html">Блог</a>
                </li>
                <li>
                  <a href="contacts.html">Обучения</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="footer-column footer-contact">
              <h3 class="footer-title">Адрес</h3>
              <p class="footer-contact-text">гр. Перник, ул. Св. Св Кирил и Методий 23 2300</p>
              <div class="footer-contact-info">
                <a href = "mailto: office@socialmediasteff.com">office@socialmediasteff.com</a>
              </div>
              <h3 class="footer-title">Свържи се с нас!</h3>
              <div class="footer-contact-social-list">
              <a
                  href="https://www.instagram.com/socialmediasteff/" target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href=" https://www.facebook.com/socialmediasteff" target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="https://www.tiktok.com/@socialmediasteff" target="_blank"
                >
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
                <a
                  href="https://www.linkedin.com/company/socialmediasteff" target="_blank" 
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-line-footer">
        <p class="footer-bottom-copy-right">
          © 2024 Social Media Steff | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
