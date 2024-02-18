import React, { useEffect } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./slider.css"
import { Link } from "react-router-dom"



export default function Sliders({images,height,navigate})  {
  const [opacities, setOpacities] = React.useState([])
  const [sliderRef] = useKeenSlider({
    slides: images.length,
    loop: true,
  },
  [
   
  ]
  )

    return (
        <div ref={sliderRef} className="fader data-keen-slider-scrollable" style={height={height}}>
            {images.map((e, idx) => (
                <div key={idx} className="fader__slide"  style={{ opacity: opacities[idx] }}>
                    <div className="text"></div>
                    <div className="back-ground"></div>
                    <img src={e.src} />
                    <div className="text">
                        <h4>{e?.text}</h4>
                        <h1 className="header">{e?.header}</h1>
                        <Link to={navigate}>
                        <div className="btn from-right">{e?.button}</div>
                        </Link>
                   
                       
                    </div>



                </div>
            ))}
        </div>
    
    
  )
}
