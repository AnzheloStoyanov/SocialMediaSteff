import "./hotelCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faUtensils,
  faSquareParking,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function HotelCard({ id, img, price, title }) {
  return (
    <Link to={`/room/${id}`}>
      <div className="item">
        <a>
          <div className="image-container">
            <img src={img} alt="Image" />
          </div>
          <span className="category">Вижте повече</span>
        </a>
        <div className="con">
          <h6>
            <a>от {price} лева</a>
          </h6>
          <h5>
            <a>{title}</a>
          </h5>
          <div className="line" />
          <div className="row facilities">
            <div className="col col-md-7">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faBath} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faBed} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faUtensils} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faSquareParking} />
                </li>
              </ul>
            </div>
            <div className="col col-md-5 text-right">
              <div className="permalink">
                <Link to="/prices">Цени</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
