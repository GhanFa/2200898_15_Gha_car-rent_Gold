import "./whyus.css";
const WhyUs = () => {
  return (
    <div className="why-us-section container mb-md-5" id="whyus">
      <div className="row mb-3 ">
        <h3 className="section-title">Why Us?</h3>
        <p className="section-desc">Mengapa harus pilih Binar Car Rental?</p>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-3 mb-3">
          <div className="why-us-card">
            <div className="card-icon">
              <img
                src={require("../../img/icon/icon_complete.png")}
                alt="Mobil Lengkap"
              />
            </div>
            <div className="card-title">Mobil Lengkap</div>
            <div className="card-desc">
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-3">
          <div className="why-us-card">
            <div className="card-icon">
              <img
                src={require("../../img/icon/icon_24hrs.png")}
                alt="Harga Murah"
              />
            </div>
            <div className="card-title">Harga Murah</div>
            <div className="card-desc">
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-3">
          <div className="why-us-card">
            <div className="card-icon">
              <img
                src={require("../../img/icon/icon_price.png")}
                alt="Layanan 24 Jam"
              />
            </div>
            <div className="card-title">Layanan 24 Jam</div>
            <div className="card-desc">
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-3">
          <div className="why-us-card">
            <div className="card-icon">
              <img
                src={require("../../img/icon/icon_professional.png")}
                alt="Sopir Professional"
              />
            </div>
            <div className="card-title">Sopir Profesional</div>
            <div className="card-desc">
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyUs;
