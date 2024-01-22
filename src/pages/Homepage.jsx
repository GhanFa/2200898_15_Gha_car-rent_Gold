import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import OurService from "../sections/OurServices/OurService";
import WhyUs from "../sections/WhyUs/WhyUs";
import Testimonial from "../sections/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import Accordion from "../components/Accordion/Accordion";
import Footer from "../sections/Footer/Footer";

const Homepage = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <OurService />
      <WhyUs />
      <Testimonial />
      <Banner />
      <Accordion />
      <Footer />
    </>
  );
};
export default Homepage;
