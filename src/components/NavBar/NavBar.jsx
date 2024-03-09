import DynamicButton from "../DynamicButton/DynamicButton";
import "./navBar.scss";
import { HashLink as Link } from 'react-router-hash-link';


const NavBar = ({ children, onClose }) => {
  const close = () => {
    onClose(); // Emit close to the parent
  };
  return (
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
  );
};

export default NavBar;
