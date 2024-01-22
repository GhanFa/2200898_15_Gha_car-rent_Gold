import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import Footer from "../sections/Footer/Footer";

const SearchCar = () => {
  return (
    <>
      <div className="overlay"></div>
      <Navigation />
      <Hero showButton={false} />
      <SearchBar />
      <Footer />
    </>
  );
};
export default SearchCar;
