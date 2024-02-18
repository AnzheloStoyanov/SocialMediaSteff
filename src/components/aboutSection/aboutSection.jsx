import "./aboutSection.scss";
export default function AboutSection({ text, image1, image2 }) {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="about-content">
            <div className="section-subtitle">В парк до самия плаж</div>
            <div className="section-title">КРАЙМОРИЕ ПАРК</div>
            <p dangerouslySetInnerHTML={{ __html: text }} />
            <div className="reservations">
              <div className="icon">
                <span className="flaticon-call" />
              </div>
              <div className="textAb">
                <p>Резервации</p>{" "}
                <a href="tel:00359899777575">+359 899 77 75 75</a>
              </div>
            </div>
          </div>

          {image1 && <img src={image1} alt="" className="first-image" />}

          {image2 && <img src={image2} alt="" className="second-image" />}
        </div>
      </div>
    </section>
  );
}
