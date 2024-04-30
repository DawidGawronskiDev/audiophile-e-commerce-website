import { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import { json } from "react-router-dom";
import ProductList from "../components/ProductList";
import CategoryHero from "../components/CategoryHero";

const HeadphonesPage = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      try {
        const response = await fetch("src/data.json");

        if (!response.ok) {
          throw json({ message: "Failed to fetch products" });
        }

        const responseData = await response.json();

        const products = responseData.filter(
          (product) => product.category === "headphones",
        );

        setProducts(products);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <CategoryHero>Headphones</CategoryHero>
      <ProductList products={products} />
      <CategoryList />
      <Testimonial />
      <Footer />
    </>
  );
};

export default HeadphonesPage;
