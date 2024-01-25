import Header from "../../Header/Header";
import Hero from "../../Hero/Hero";
import Categories from "../../shared/Categories/Categories";
import Footer from "../../shared/Footer/Footer";
import Testimonial from "../../shared/Testimonial/Testimonial";

import Showcase from "./Showcase";

const MainPage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Showcase />
      <Testimonial />
    </>
  );
};

export default MainPage;
