import React from "react";

import HeroSection from "./HeroSection";

import Header from "../CoreFile/Header";
import { Featuredsection } from "../HomeFile/Featuredsection";
import { Feature } from "./Feature";
import { Savemoney } from "./Savemoney";
import { Reward } from "./Reward";
import Overview from "./Overview";
import Footer from "../CoreFile/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Featuredsection/>
      <Feature />
      <Savemoney />
      <Reward />
      <Overview />
      <Footer />
    </>
  );
};
