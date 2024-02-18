import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faUtensils, faWifi } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import "./facilities.scss";

import Fade from "@successtar/react-reveal/Fade";

export default function Facilities() {
  return (
    <section className="facilties section-padding">
      <div className="container">
        <div>
          <div className="row">
            <Fade bottom>
              <div className="col-md-12">
                <div className="section-subtitle">Услуги</div>
                <div className="section-title">Удобствата при нас</div>
              </div>
            </Fade>
          </div>
          <div className="row">
            <div className="facility-container fadeInUp-animation">
              <Fade bottom>
                <div
                  className="single-facility animate-box fadeInUp animated"
                  data-animate-effect="fadeInUp"
                >
                  <FontAwesomeIcon icon={faCar} />
                  <h5>Парко място</h5>
                  <p>
                    Комплексът разполага с обособен паркинг за 15 автомобила – 4
                    автомобила между Къща II и Къща III и 11 автомобила при Къща
                    III.
                  </p>
                </div>
              </Fade>
            </div>
            <div className="facility-container fadeInUp-animation">
              <Fade bottom>
                <div
                  className="single-facility animate-box fadeInUp animated"
                  data-animate-effect="fadeInUp"
                >
                  <FontAwesomeIcon icon={faUtensils} />
                  <h5>Оборудван кухненски бокс</h5>
                  <p>
                    Всеки апартамент разполага с напълно оборудван кухненски
                    бокс - хладилник с физер, кафемашина, ел. кана, чинии, чаши,
                    тенджери, тигани и др.
                  </p>
                </div>
              </Fade>
            </div>
            <div className="facility-container fadeInUp-animation">
              <Fade bottom>
                <div
                  className="single-facility animate-box fadeInUp animated"
                  data-animate-effect="fadeInUp"
                >
                  <FontAwesomeIcon icon={faWifi} />
                  <h5>Бърз Интернет</h5>
                  <p>
                    Насладете се на високоскоростен интернет и IP телевизия с
                    отлично качество.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
