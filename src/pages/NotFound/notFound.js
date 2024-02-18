import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Image3 from '../../asstes/images/3.jpg';
import Sliders from '../../components/Sliders/Slider';


 export default function NotFound(){

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({top: 0, left: 0 });
  }, [location]);

  const images = [
    {
        src: Image3,
       
        header: 'Няма такава страница брат',
        button:'Обратно'
    }


]
     return (
       <>
       
       <Sliders images={images} height="100vh" navigate={'/'}></Sliders>
        <div>Няма такава страница брат</div>
       </>
     );
 }