import CategoryList from "../components/CategoryList";
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
    </>
  );
};

export default SpeakersPage;
