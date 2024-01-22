import "./card.css";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../helper/formatCurrency";
import SkeletonCard from "../Skeleton/Skeleton";

const Card = (props) => {
  const PLACEHOLDER_URL = "https://fakeimg.pl/270x160";
  return (
    <>
      <div className="row gap-3 gx-0">
        {props.cars.map((e) => (
          <div className="col-md-4 car-card mx-auto mx-md-0" key={e.id}>
            <div className="card-img d-flex justify-content-center ">
              <img
                src={e.image || PLACEHOLDER_URL}
                alt={e.name}
                width={270}
                height={160}
              />
            </div>
            <div className="detail-card">
              <span className="car-title">{e.name}</span>
              <span className="price">{formatCurrency(e.price)} / hari</span>
              <p className="car-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <Link
              to={`/car-detail/${e.id}`}
              className="green-btn w-100 text-center"
            >
              Pilih Mobil
            </Link>
          </div>
        ))}
        {props.isLoading ? <SkeletonCard /> : null}
      </div>
    </>
  );
};
export default Card;
