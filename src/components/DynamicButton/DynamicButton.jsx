import "./DynamicButton.scss";

const DynamicButton = ({ text, isWhite = false, onClick }) => {
  return (
    <div className={isWhite ? "butn-light" : "butn-dark"}>
      <a onClick={onClick}>
        <span>{text}</span>
      </a>
    </div>
  );
};

export default DynamicButton;
