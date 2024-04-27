import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Image3 from "../../asstes/images/3.jpg";
import Sliders from "../../components/Sliders/Slider";

export default function NotFound() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);

  return (
    <>
      <div className="notFound why-tiktok">
        <h1>
          Тази страница не <strong> съществува</strong>
        </h1>
      </div>
    </>
  );
}
