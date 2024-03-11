import DynamicButton from "../DynamicButton/DynamicButton";
import "./navBar.scss";
import { HashLink as Link } from 'react-router-hash-link';
import { useEffect,useState } from "react";

const NavBar = ({ children, onClose }) => {
  const close = () => {
    onClose?.(); // Emit close to the parent; // Emit close to the parent
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
 <>
    { isMobile&& <>
      <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <Link to="/#aboutus"  onClick={close}>
           За нас
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/#services"  onClick={close}>
            Услуги
        </Link>
      </li>
      {/* <li class="nav-item">
        <Link to="/blog">            
            Блог
        </Link>
      </li> */}
      <li class="nav-item">
        <Link to="/trainings"  onClick={close}>
            Обучения
        </Link>
      </li>
      <li>
      <Link to="/#work-with-us"  onClick={close}>
      <DynamicButton text="Работи с нас"/>
        </Link>
     
      </li>
    </ul>
    </>
      }
      
  { !isMobile&& <>
      <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <Link to="/#aboutus" >
           За нас
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/#services" >
            Услуги
        </Link>
      </li>
      {/* <li class="nav-item">
        <Link to="/blog">            
            Блог
        </Link>
      </li> */}
      <li class="nav-item">
        <Link to="/trainings">
            Обучения
        </Link>
      </li>
      <li>
      <Link to="/#work-with-us" >
      <DynamicButton text="Работи с нас"/>
        </Link>
     
      </li>
    </ul>
    </>
      }
  </>
  );

};

export default NavBar;
