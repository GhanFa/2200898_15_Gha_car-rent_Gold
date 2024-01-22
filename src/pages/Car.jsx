import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import CarDetail from "../sections/CarDetail/CarDetail";
import Footer from "../sections/Footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";

const Car = () => {
  const { id } = useParams();

  const [car, setCar] = useState([]);

  const fetchCar = async () => {
    try {
      const carResponse = await axiosInstance.get(`/customer/car/${id}`);
      console.log(carResponse.data);
      setCar(carResponse.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCar();
  }, [id]);
  return (
    <>
      <Navigation />
      <Hero showContent={false} />
      <SearchBar showTitle={true} disabled={true} showButton={false} />
      <CarDetail car={car} />
      <Footer />
    </>
  );
};
export default Car;
