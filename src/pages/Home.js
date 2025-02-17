import React from "react";
import SlideShow from "../components/SlideShow"; // Import Slideshow Component
import BestSeller from "../components/BestSeller";
import NewArrival from "../components/NewArrival";

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-darkBg">
      {/* Slideshow Section */}
      <SlideShow />
      <BestSeller />
      <NewArrival />
      {/* More components will be added here later */}
    </div>
  );
};

export default Home;
