import React, { useState, useEffect, useContext } from "react";
import "./header.scss";
import logo from "../../asstes/images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Overlay from "../Overlay/Overlay";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

function Header() {
  const [burgerState, setBurgerState] = useState(false);
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

  const openBurger = () => {
    setBurgerState(true);
  };

  const closeBurger = () => {
    setBurgerState(false);
  };

  return (
    <header>
      <div className="mainClass container">
        <div className="leftSide"></div>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo"></img>
          </Link>
        </div>
        {!isMobile && (
          <div className="rightSide">
            <NavBar />
          </div>
        )}

        {isMobile && (
            <div className="rightSide">
          <FontAwesomeIcon
            className="burger"
            onClick={openBurger}
            icon={faBars}
          />
           </div>
        )}
        {!burgerState ? (
          ""
        ) : (
          <Overlay onClose={closeBurger}>
            <NavBar />
          </Overlay>
        )}
      </div>
    </header>
  );
}

export default Header;
