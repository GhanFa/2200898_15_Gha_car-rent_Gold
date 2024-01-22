import "./testimony.css";
import Carousel from "../../components/Carousel/Carousel";

const Testimonial = () => {
  return (
    <div className="testimony-section" id="testimonial">
      <div className="col-md-12 testimony-wrapper">
        <h1 className="title">Testimoni</h1>
        <p className="description">
          Berbagai review positif dari para pelanggan kami
        </p>
      </div>
      <Carousel />
    </div>
  );
};
export default Testimonial;
