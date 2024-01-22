import Card from "../../components/Card/Card";
import "./cardList.css";

const CarList = (props) => {
  return (
    <div className="cards-section container mx-auto">
      <Card cars={props.cars} isLoading={props.isLoading} />
    </div>
  );
};
export default CarList;
