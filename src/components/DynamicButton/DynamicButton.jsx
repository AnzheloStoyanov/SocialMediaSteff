import "./DynamicButton.scss";

const DynamicButton = ({ text, isWhite = false, onClick }) => {
  return (
    <div role="button"  className={isWhite ? "butn-light" : "butn-dark"}>
      <a onClick={onClick}>
        <span>{text}</span>
      </a>
    </div>
  );
};

export default DynamicButton;
