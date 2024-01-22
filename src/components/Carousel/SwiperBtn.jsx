import { useSwiper } from "swiper/react";

const SwiperBtn = () => {
  const swiper = useSwiper();
  return (
    <div className="carousel-button d-flex justify-content-center gap-3">
      <button
        className="prev-btn d-flex align-items-center justify-content-center"
        onClick={() => swiper.slidePrev()}
      >
        <span className="carousel-control-prev-icon icon"></span>
      </button>
      <div
        className="next-btn d-flex align-items-center justify-content-center"
        onClick={() => swiper.slidePrev()}
      >
        <span className="carousel-control-next-icon icon"></span>
      </div>
    </div>
  );
};
export default SwiperBtn;
