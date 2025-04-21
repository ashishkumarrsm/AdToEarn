import React from "react";

import { Pricetablesection } from "./Pricetablesection";
// import { Testmonialsection } from "./Testmonialsection";

import Header from "../../CoreFile/Header";
import Footer from "../../CoreFile/Footer";
import TestimonialSlider from "../TestimonialSlider";
export const Price = () => {
  return (
    <>
      <Header />
      <Pricetablesection />
      {/* <Testmonialsection /> */}
      <TestimonialSlider/>
      <Footer />
    </>
  );
};
