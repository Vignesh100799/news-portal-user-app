import React from "react";
import Navbar from "../Layout/Navbar";
import Slideimage from "./Slideimage";
import NewsCard from "./NewsCard";
import Footer from "../Layout/Footer";


const HomePage = () => {
  return (
   <>
      <Navbar/>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <Slideimage />
        </div>   </div>
        <div className="row justify-content-center">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
   </div>
    </div>
      <Footer/>
    </>
  );
};

export default HomePage;
