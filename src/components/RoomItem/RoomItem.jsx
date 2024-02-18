import "./roomItem.scss";
import { useParams } from "react-router-dom";
import HotelCard from "../HotelCard/HotelCard";

export default function RoomItem() {
  const { id } = useParams();
  const rooms = [
    { id: 1, img: "https://www.kraimoriepark.com/img/rooms/r1.jpg", price: 150, title: "Апартамент с една спалня" },
    { id: 2, img: "https://www.kraimoriepark.com/img/rooms/r2.jpg", price: 250, title: "Апартамент с две спални" },
    { id: 3, img: "https://www.kraimoriepark.com/img/rooms/r3.jpg", price: 200, title: "ДЕЛУКС Апартамент с една спалня" },
    { id: 4, img: "https://www.kraimoriepark.com/img/rooms/r4.jpg", price: 300, title: "ДЕЛУКС Апартамент с две спални" },
  ];

  
  return (
    <section className="room-item">
      <div className="room-item-title">
        <div className="title-container">
          <div>
            <div className="section-subtitle">Типове настаняване</div>
            <div className="section-title">Апартаментите в КРАЙМОРИЕ ПАРК</div>
          </div>
        </div>
      </div>
      <button onClick={()=>{alert(id)}}>Prss</button>
      <div className="bb">
        <div className="rowItem">
        {rooms.map((room) => (
            <HotelCard
              key={room.id}
              id={room.id}
              img={room.img}
              price={room.price}
              title={room.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
