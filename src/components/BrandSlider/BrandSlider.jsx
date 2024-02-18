import * as React from "react"
import "./styles.scss"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import insa from "../../asstes/images/insaoil.svg"
import bash from "../../asstes/images/bashHub.png"
import coolClub from "../../asstes/images/coolClub.svg"
import flip from "../../asstes/images/flip.svg"
import kaufland from "../../asstes/images/Kaufland_Logo.svg.png"
import airSpice from "../../asstes/images/airSpice.webp"
import lockerRoom from "../../asstes/images/lockerroom.webp"
import funPoint from "../../asstes/images/fun_point_logo.svg"

const animation = { duration: 30000, easing: (t) => t }
export default function BrandSlider() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    slides: {
        perView: 6,
       
      },
  })
  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">     <img src={insa}></img></div>
      <div className="keen-slider__slide">     <img src={bash}></img></div>
      <div className="keen-slider__slide">     <img src={coolClub}></img></div>
      <div className="keen-slider__slide">     <img src={flip}></img></div>
      <div className="keen-slider__slide">     <img src={kaufland}></img></div>
      <div className="keen-slider__slide">     <img src={airSpice}></img></div>
      {/* <div className="keen-slider__slide locker">     <img src={lockerRoom}></img></div> */}
      <div className="keen-slider__slide">     <img src={funPoint}></img></div>
      
    </div>
  )
}

