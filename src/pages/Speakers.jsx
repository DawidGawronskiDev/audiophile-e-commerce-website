import { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import { json } from "react-router-dom";
import ProductList from "../components/ProductList";
import CategoryHero from "../components/CategoryHero";

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
