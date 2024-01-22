import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import CarList from "../sections/CarList/CarList";
import Footer from "../sections/Footer/Footer";
import { useState, useEffect } from "react";
import { axiosInstance } from "../lib/axios";
import { useSearchParams } from "react-router-dom";

const Cars = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const category = searchParams.get("category");
  const price = searchParams.get("price");
  const status = searchParams.get("status");

  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      setIsLoading(true);
      try {
        const carsResponse = await axiosInstance.get(`/customer/v2/car`, {
          params: {
            name,
            category,
            price,
            status,
          },
        });
        setCars(carsResponse.data.cars);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCars();
  }, [name, category, price, status]);

  return (
    <div className="position-relative">
      <Navigation />
      <Hero showButton={false} />
      <SearchBar showTitle={true} />
      <CarList cars={cars} isLoading={isLoading} />
      <Footer />
    </div>
  );
};
export default Cars;
