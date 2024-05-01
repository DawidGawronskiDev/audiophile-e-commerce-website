import CategoryList from "../components/CategoryList";
import Footer from "../components/Footer";
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
      <Footer />
    </>
  );
};

export default EarphonesPage;
