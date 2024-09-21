import React from "react";
import HomePageImageCarousel from "../components/HomePageImageCarousel";
import AboutSection from "../components/AboutContent";
import ImageGallery from "../components/ImageGallery";
import imageData from "../data/ImageData,js"; 

const HomePage = () => {
  return (
    <>
      <HomePageImageCarousel />
      <AboutSection />
      <ImageGallery images={imageData} /> 
    </>
  );
};

export default HomePage;
