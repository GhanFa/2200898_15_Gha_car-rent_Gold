import "./hero.css";
import { Link } from "react-router-dom";

const Hero = ({ showButton = true, showContent = true }) => {
  return (
    <div className="hero-section container-fluid ">
      <div className="row">
        <div className="hero-text col-md-6 col-sm-12 ps-lg-5">
          {showContent && (
            <div className="wrapper ms-lg-5 ps-lg-5">
              <h2 className="hero-title">
                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
              </h2>
              <p className="hero-desc">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              {showButton && (
                <Link to="/search" className="green-btn">
                  Mulai Sewa Mobil
                </Link>
              )}
            </div>
          )}
        </div>
        <div className="hero-img col-lg-6 col-sm-12 pe-0">
          {showContent && (
            <img
              src={require("../../img/hero/img_car.png")}
              alt="hero img"
              loading="lazy"
              className="w-100"
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Hero;
