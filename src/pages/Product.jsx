import CategoryList from "../components/CategoryList";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import Testimonial from "../components/Testimonial";

const ProductPage = () => {
  return (
    <>
      <ProductDetail />
      <CategoryList />
      <Testimonial />
      <Footer />
    </>
  );
};

export default ProductPage;
