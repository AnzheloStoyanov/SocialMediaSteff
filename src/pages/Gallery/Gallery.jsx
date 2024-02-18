import React, { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";

import Image3 from "../../asstes/images/3.jpg";
import RoomOne from "../../asstes/images/roomOne.jpg";

import "./gallery.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Sliders from "../../components/Sliders/Slider";

export default function Gallery() {
  
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({top: 0, left: 0 });
  }, [location]);
  
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const photos = [
    // Add URLs of your photos here
    Image3,
    RoomOne,
    RoomOne,
    Image3,
    RoomOne,
    RoomOne,
    Image3,
    RoomOne,
    RoomOne,
    // Add more photos as needed
  ];

  const handlePhotoClick = (index) => {
    setSelectedPhotoIndex(index);
  };

  const handleClose = () => {
    setSelectedPhotoIndex(null);
  };
  const images = [
    {
      src: Image3,
      text: "КРАЙМОРИЕ ПАРК",
      header: "Галерия",
    },
  ];

  return (
    <>
      <Sliders images={images} height="70vh" navigate={"/"} />
      <section className="gallery-section">
        <div>
          <div className="gallery">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Photo ${index + 1}`}
                onClick={() => handlePhotoClick(index)}
              />
            ))}
          </div>
          {selectedPhotoIndex !== null && (
            <div onClick={handleClose} className="photo-viewer">
                    <FontAwesomeIcon className="close-button" onClick={handleClose} icon={faXmark} />
              <img
                src={photos[selectedPhotoIndex]}
                alt={`Photo ${selectedPhotoIndex + 1}`}
                className="full-screen-photo"
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
