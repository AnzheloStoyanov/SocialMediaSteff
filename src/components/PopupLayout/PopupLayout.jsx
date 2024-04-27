import styles from "./PopUpLayout.module.css";
import { useState } from "react";


const PopUpLayout = ({ children }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  return (
    <div className={styles.popUpLayOut}>
     <div className={styles.bahur}>
     {children}
     </div>
    </div>
  );
};



export default PopUpLayout;