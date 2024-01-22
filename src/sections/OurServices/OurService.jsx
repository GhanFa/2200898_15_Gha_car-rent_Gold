import "./services.css";

const OurService = () => {
  return (
    <div className="service-section container w-60 mb-2 mb-md-5" id="services">
      <div className="row justify-content-center ">
        <div className="service-img col-md-6 col-sm-10 px-5 mb-4 ">
          <img
            src={require("../../img/content/img_service.png")}
            alt="service img"
            loading="lazy"
            className="img-fluid"
          />
        </div>
        <div className="service-detail col-md-5 col-sm-12 ps-lg-2 pt-lg-4 ">
          <h3 className="section-title">
            Best Car Rental for any kind of trip in (Lokasimu)!
          </h3>
          <p className="section-desc">
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          <ul className="services-list">
            <li className="services-item">
              <i className="bi-check2"></i>
              Sewa Mobil Dengan Supir di Bali 12 Jam
            </li>
            <li className="services-item">
              <i className="bi-check2"></i>
              Sewa Mobil Lepas Kunci di Bali 24 Jam
            </li>
            <li className="services-item">
              <i className="bi-check2"></i>
              Sewa Mobil Jangka Panjang Bulanan
            </li>
            <li className="services-item">
              <i className="bi-check2"></i>
              Gratis Antar - Jemput Mobil di Bandara
            </li>
            <li className="services-item">
              <i className="bi-check2"></i>
              Layanan Airport Transfer / Drop In Out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurService;
