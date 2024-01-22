import "swiper/css";
import "swiper/css/navigation";
import "./../Carousel/carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperBtn from "./SwiperBtn";

const Carousel = () => {
  return (
    <div className="container-fluid mx-auto mx-md-0  ">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        modules={[Navigation]}
        allowTouchMove={false}
        className="mySwiper"
        breakpoints={{
          660: {
            slidesPerView: 4,
          },
          1920: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide className="swiper-slide" key="1">
          <div className="main-content">
            <div className="row">
              <div className="align-items-center col-md-3 d-flex justify-content-center">
                <img
                  src={require("../../img/profil/img_photo.png")}
                  alt="testimonial-slider"
                  className="img-fluid rounded-circle"
                  style={{ width: "80px", height: "80px" }}
                />
              </div>
              <div className="col-md-9">
                <div className="start ">
                  <img src={require("../../img/icon/Star 1.png")} alt="star" />
                  <img src={require("../../img/icon/Star 1.png")} alt="star" />
                  <img src={require("../../img/icon/Star 1.png")} alt="star" />
                  <img src={require("../../img/icon/Star 1.png")} alt="star" />
                  <img src={require("../../img/icon/Star 1.png")} alt="star" />
                </div>
                <div className="desc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error id minus odio mollitia eius inventore fuga nesciunt,
                    qui quisquam deserunt harum similique architecto, nisi
                    culpa.
                  </p>
                </div>
                <div className="fullname">
                  <figcaption className="blockquote-footer fs-8">
                    <cite>Gurdeep Dahiya</cite>
                  </figcaption>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" key="2">
          <div className="main-content">
            <div className="row">
              <div className="align-items-center col-md-3 d-flex justify-content-center">
                <img
                  src={require("../../img/profil/img_photo2.png")}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{ width: "80px", height: "80px" }}
                />
              </div>
              <div className="col-md-9">
                <div className="start">
                  <img src={require("../../img/icon/Star 1.png")} alt="star" />
                  <img src={require("../../img/icon/Star 1.png")} alt="star" />
                  <img src={require("../../img/icon/Star 1.png")} alt="star" />
                  <img src={require("../../img/icon/Star 1.png")} alt="star" />
                  <img src={require("../../img/icon/Star 1.png")} alt="star" />
                </div>
                <div className="desc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    distinctio ratione cumque placeat, mollitia culpa? Corporis
                    repellendus saepe ipsam maiores odit inventore quo deleniti
                    amet!
                  </p>
                </div>
                <div className="fullname">
                  <figcaption className="blockquote-footer fs-8">
                    <cite>Gurdeep Dahiya</cite>
                  </figcaption>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" key="3">
          <div className="main-content">
            <div className="row">
              <div className="align-items-center col-md-3 d-flex justify-content-center">
                <img
                  src={require("../../img/profil/img_photo3.png")}
                  alt="testtimonial-slider"
                  className="img-fluid rounded-circle"
                  style={{ width: "80px", height: "80px" }}
                />
              </div>
              <div className="col-md-9">
                <div className="start">
                  <img src={require("../../img/icon/Star 1.png")} alt="star" />
                  <img src={require("../../img/icon/Star 1.png")} alt="star" />
                  <img src={require("../../img/icon/Star 1.png")} alt="star" />
                  <img src={require("../../img/icon/Star 1.png")} alt="star" />
                  <img src={require("../../img/icon/Star 1.png")} alt="star" />
                </div>
                <div className="desc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    distinctio ratione cumque placeat, mollitia culpa? Corporis
                    repellendus saepe ipsam maiores odit inventore quo deleniti
                    amet!
                  </p>
                </div>
                <div className="fullname">
                  <figcaption className="blockquote-footer fs-8">
                    <cite>Gurdeep Dahiya</cite>
                  </figcaption>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" key="4">
          <div className="main-content">
            <div className="row">
              <div className="align-items-center col-md-3 d-flex justify-content-center">
                <img
                  src={require("../../img/profil/img_photo4.png")}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{ width: "80px", height: "80px" }}
                />
              </div>
              <div className="col-md-9">
                <div className="start">
                  <img src={require("../../img/icon/Star 1.png")} alt="star" />
                  <img src={require("../../img/icon/Star 1.png")} alt="star" />
                  <img src={require("../../img/icon/Star 1.png")} alt="star" />
                  <img src={require("../../img/icon/Star 1.png")} alt="star" />
                  <img src={require("../../img/icon/Star 1.png")} alt="star" />
                </div>
                <div className="desc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    distinctio ratione cumque placeat, mollitia culpa? Corporis
                    repellendus saepe ipsam maiores odit inventore quo deleniti
                    amet!
                  </p>
                </div>
                <div className="fullname">
                  <figcaption className="blockquote-footer fs-8">
                    <cite>Gurdeep Dahiya</cite>
                  </figcaption>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" key="5">
          <div className="main-content">
            <div className="row">
              <div className="align-items-center col-md-3 d-flex justify-content-center">
                <img
                  src={require("../../img/profil/img_photo2.png")}
                  alt="testimonial-slider"
                  className="img-fluid rounded-circle"
                  style={{ width: "80px", height: "80px" }}
                />
              </div>
              <div className="col-md-9">
                <div className="start">
                  <img src={require("../../img/icon/Star 1.png")} alt="star" />
                  <img src={require("../../img/icon/Star 1.png")} alt="star" />
                  <img src={require("../../img/icon/Star 1.png")} alt="star" />
                  <img src={require("../../img/icon/Star 1.png")} alt="star" />
                  <img src={require("../../img/icon/Star 1.png")} alt="star" />
                </div>
                <div className="desc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error id minus odio mollitia eius inventore fuga nesciunt,
                    qui quisquam deserunt harum similique architecto, nisi
                    culpa.
                  </p>
                </div>
                <div className="fullname">
                  <figcaption className="blockquote-footer fs-8">
                    <cite>Gurdeep Dahiya</cite>
                  </figcaption>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="row mt-md-5">
          <SwiperBtn />
        </div>
      </Swiper>
    </div>
  );
};
export default Carousel;
