import CategoryList from "../components/CategoryList";
import Testimonial from "../components/Testimonial";
import ProductList from "../components/Category/ProductList";
import CategoryHero from "../components/Category/CategoryHero";

const EarphonesPage = () => {
  return (
    <>
      <CategoryHero>Earphones</CategoryHero>
      <ProductList type="earphones" />
      <CategoryList />
      <Testimonial />
    </>
  );
};

export default EarphonesPage;
