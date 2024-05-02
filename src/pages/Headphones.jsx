import CategoryList from "../components/CategoryList";
import Testimonial from "../components/Testimonial";
import ProductList from "../components/Category/ProductList";
import CategoryHero from "../components/Category/CategoryHero";

const HeadphonesPage = () => {
  return (
    <>
      <CategoryHero>Headphones</CategoryHero>
      <ProductList type="headphones" />
      <CategoryList />
      <Testimonial />
    </>
  );
};

export default HeadphonesPage;
