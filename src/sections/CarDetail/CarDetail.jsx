import "./carDetail.css";
import { formatCurrency } from "../../helper/formatCurrency";

const CarDetail = (props) => {
  const PLACEHOLDER_URL = "https://fakeimg.pl/270x160";
  return (
    <div className="detail-section container">
      <div className="row justify-content-between gap-3">
        <div className="col-md-7">
          <div className="wrapper">
            <h3 className="detail-title mb-4">Tentang Paket</h3>
            <h3 className="detail-subtitle">Include</h3>
            <ul>
              <li>
                Apa saja yang termasuk dalam paket misal durasi max 12 jam
              </li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>
            <h3 className="detail-subtitle">Exclude</h3>
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item mb-3 ">
                <h3
                  className="accordion-header detail-subtitle border-0"
                  id="flush-headingOne"
                >
                  <button
                    className="accordion-button collapsed  ps-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Refund, Reschedule, Overtime
                  </button>
                </h3>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body ps-0 ">
                    <ul>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>
                        Jika overtime lebih dari 12 jam akan ada tambahan biaya
                        Rp 20.000/jam
                      </li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>
                        Jika overtime lebih dari 12 jam akan ada tambahan biaya
                        Rp 20.000/jam
                      </li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>
                        Jika overtime lebih dari 12 jam akan ada tambahan biaya
                        Rp 20.000/jam
                      </li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="wrapper">
            <div className="d-flex justify-content-center mb-5">
              <img
                src={props.car.image || PLACEHOLDER_URL}
                alt={props.car.name}
                width={270}
                height={160}
              />
            </div>
            <div className="car-name mb-1">{props.car.name}</div>
            <div className="category d-flex gap-2 align-items-center  ">
              <img
                src={require("../../img/icon/fi_users.png")}
                alt="user"
                width={12}
                height={12}
              />
              <span>6-8 orang</span>
            </div>
            <div className="price d-flex justify-content-between">
              <span>Total</span>
              <span>{formatCurrency(props.car.price)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarDetail;
