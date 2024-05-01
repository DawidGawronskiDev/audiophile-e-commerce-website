import CategoryList from "../components/CategoryList";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import ProductList from "../components/Category/ProductList";
import CategoryHero from "../components/Category/CategoryHero";

const SpeakersPage = () => {
  return (
    <>
      <CategoryHero>Speakers</CategoryHero>
      <ProductList type="speakers" />
      <CategoryList />
      <Testimonial />
      <Footer />
    </>
  );
};

export default SpeakersPage;
