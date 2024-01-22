import "./footer.css";

const Footer = () => {
  return (
    <div className="container footer-section">
      <div className="row d-flex justify-content-between">
        <div className="col-md-3 col-sm-6 footer-address mb-3 ">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className="col-md-1 col-sm-6 footer-navigation mb-3">
          <a href="#services">Our Services</a>
          <a href="#whyus">Why Us</a>
          <a href="#testimonial">Testimonial</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="col-md-3 col-sm-6 gap-2 footer-socmed mb-3">
          <p>Connect with us</p>
          <div className="socmed d-flex  gap-3">
            <a href="https://www.facebook.com" target="blank">
              <img
                src={require("../../img/icon/icon_facebook.png")}
                alt="facebook"
              />
            </a>
            <a href="https://www.instagram.com" target="blank">
              <img
                src={require("../../img/icon/icon_instagram.png")}
                alt="instagram"
              />
            </a>
            <a href="https://www.twitter.com" target="blank">
              <img
                src={require("../../img/icon/icon_twitter.png")}
                alt="twitter"
              />
            </a>
            <a href="https://www.gmail.com" target="blank">
              <img src={require("../../img/icon/icon_mail.png")} alt="mail" />
            </a>
            <a href="https://www.twitch.com" target="blank">
              <img
                src={require("../../img/icon/icon_twitch.png")}
                alt="twitch"
              />
            </a>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 footer-brand">
          <p>Copyright Binar 2022</p>
          <div className="brand-logo"></div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
