import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import SlideShow from "../components/SlideShow"; // Import Slideshow Component
import BestSeller from "../components/BestSeller";
import NewArrival from "../components/NewArrival";
import Review from "../components/Review";

const Home = () => {
  const location = useLocation();
  const currentUrl = window.location.origin + location.pathname;
  return (
    <div className="min-h-screen bg-white dark:bg-darkBg">
      <Helmet>
        {/* <title>Shop the Best Chikankari Kurtis – Clofer</title> */}
        <meta name="description" content="Discover authentic Chikankari kurtis, sets, and more at Clofer. Shop now for premium quality fashion!" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="Shop the Best Chikankari Kurtis – Clofer" />
        <meta property="og:description" content="Discover authentic Chikankari kurtis, sets, and more at Clofer. Shop now for premium quality fashion!" />
        <meta property="og:image" content={`${window.location.origin}/assets/clofer_logo_circle.png`} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shop the Best Chikankari Kurtis – Clofer" />
        <meta name="twitter:description" content="Discover authentic Chikankari kurtis, sets, and more at Clofer." />
        <meta name="twitter:image" content={`${window.location.origin}/assets/clofer_logo_circle.png`} />
      </Helmet>

      {/* SEO  */}
      <h1 className="sr-only">
        Clofer - Premium Chikankari Kurtis & Stylish Women's Wear Online in India
      </h1>

      {/* Slideshow Section */}
      <SlideShow />
      <BestSeller />
      <NewArrival />
      <Review />

      {/* More components will be added here later */}
    </div>
  );
};

export default Home;
