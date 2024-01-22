import "./banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container">
      <div className="col-lg-12 col-md-10 cta-banner mx-auto px-5 py-5">
        <h2 className="lh-lg px-4 py-3 p-md-0 ">
          Sewa Mobil di (Lokasimu) Sekarang
        </h2>
        <p className="w-75 px-4 p-md-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link to="/search" className="banner-btn">
          Mulai Sewa Mobil
        </Link>
      </div>
    </div>
  );
};
export default Banner;
