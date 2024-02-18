import styles from './Overlay.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Overlay = ({ children, onClose }) => {

  const close = () => {
    onClose(); // Emit close to the parent
  };

  return <div className={styles.wrapper}>
    <div className={styles.menu}>
      <div>
      <FontAwesomeIcon onClick={close} icon={faXmark} />
      </div>
      {children}
    </div>
    <div className={styles.backdrop} id="backdrop" onClick={close}></div>
  </div>
};

export default Overlay;
