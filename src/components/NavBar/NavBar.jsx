import DynamicButton from "../DynamicButton/DynamicButton";
import "./navBar.scss";
import { Link } from "react-router-dom";

const NavBar = ({ children, onClose }) => {
  return (
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <Link to="/aboutus">
           За нас
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/сervices">
            Услуги
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/blog">            
            Блог
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/trainings">
            Обучения
        </Link>
      </li>
      <li>
      <DynamicButton text="Работи с нас">

      </DynamicButton>
      </li>
    </ul>
  );
};

export default NavBar;
