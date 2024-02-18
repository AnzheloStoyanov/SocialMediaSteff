import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./testimonials.scss";

const animation = { duration: 5000, easing: (t) => t };

const comments = [
  {
    text: "Very cool complex, with clean and comfortable apartments! The location is great! The sea is within easy reach, green on the territory! Everything is done with taste and thought out to the smallest detail! Special thanks to the owner of this complex! Responsive person who tries to do everything to make you feel at home!",
    name: "Anton Petrov",
  },
  {
    text: "Мястото е страхотно, тихо и прохладно, апартаментите са чисто нови и луксозно и модерно обзаведени има интернет и телевизия със 400 канала.",
    name: "Харалан Машев",
  },
  {
    text: "Много добро място за почивка на метри от плажа.",
    name: "Цветан Йорданов",
  },
];

export default function TestelmonialsSlider() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <div className="itemM">
            <span className="quote">
              <img src="https://www.kraimoriepark.com/img/quot.png" alt="" />
            </span>
            <p>Много добро място за почивка на метри от плажа.</p>
            <div className="info">
              <div>
                <h6>Цветан Йорданов</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide1">
          <div className="itemM">
            <span className="quote">
              <img src="https://www.kraimoriepark.com/img/quot.png" alt="" />
            </span>
            <p>
              Very cool complex, with clean and comfortable apartments! The
              location is great! The sea is within easy reach, green on the
              territory! Everything is done with taste and thought out to the
              smallest detail! Special thanks to the owner of this complex!
              Responsive person who tries to do everything to make you feel at
              home!
            </p>
            <div className="info">
              <div>
                <h6>Anton Petrov</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide1">
          <div className="itemM">
            <span className="quote">
              <img src="https://www.kraimoriepark.com/img/quot.png" alt="" />
            </span>
            <p>
              Мястото е страхотно, тихо и прохладно, апартаментите са чисто нови
              и луксозно и модерно обзаведени има интернет и телевизия със 400
              канала.
            </p>
            <div className="info">
              <div>
                <h6>Харалан Машев</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
