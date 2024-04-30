import { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import { json } from "react-router-dom";
import ProductList from "../components/ProductList";
import CategoryHero from "../components/CategoryHero";

const HeadphonesPage = () => {
  return (
    <>
      <CategoryHero>Headphones</CategoryHero>
      <ProductList type="headphones" />
      <CategoryList />
      <Testimonial />
      <Footer />
    </>
  );
};

export default HeadphonesPage;
