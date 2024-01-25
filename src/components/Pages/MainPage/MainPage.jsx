import Header from "../../Header/Header";
import Hero from "../../Hero/Hero";
import Categories from "../../shared/Categories/Categories";
import Footer from "../../shared/Footer/Footer";
import Testimonial from "../../shared/Testimonial/Testimonial";

import Showcase from "./Showcase";

const MainPage = () => {
  return (
    <>
      <Header />
      <div className="grid gap-24">
        <Hero />
        <Categories />
        <Showcase />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
