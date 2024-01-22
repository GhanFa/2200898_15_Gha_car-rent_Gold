import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./skeleton.css";
const SkeletonCard = () => {
  return Array(10)
    .fill()
    .map((item, index) => (
      <div className="col-md-4 skeleton-card" key={index}>
        <div className="skeleton-img text-center ">
          <Skeleton width={270} height={160} />
        </div>
        <div className="skeleton-detail">
          <span className="skeleton-title">
            <Skeleton width={50} />
          </span>
          <span className="skeleton-price">
            <Skeleton width={170} />
          </span>
          <p className="skeleton-desc mb-0 ">
            <Skeleton width={290} count={3} />
          </p>
        </div>
        <Skeleton height={35} width={290} />
      </div>
    ));
};
export default SkeletonCard;
