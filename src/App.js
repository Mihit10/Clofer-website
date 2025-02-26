import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import ScrollerOnTop from "./ScrollerOnTop";

import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import StorePolicy from "./pages/StorePolicy";
import ReturnExchange from "./pages/ReturnExchange";
import InternationalShipping from "./pages/InternationalShipping";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import ShippingPolicy from "./pages/ShippingPolicy";
import SizeGuide from "./pages/SizeGuide";
import Faq from "./pages/Faq";
import ProductPage from "./pages/ProductPage";

import ShortKurti from "./pages/ShortKurti";
import LongKurti from "./pages/LongKurti";
import KurtiSet from "./pages/KurtiSet";
import CloferLuxe from "./pages/CloferLuxe";
import Bottoms from "./pages/Bottoms";
import CloferCrestline from "./pages/CloferCrestline";

import PreHeader from "./components/PreHeader"
import Header from "./components/Header"
import Footer from "./components/Footer"
import CategoryNavbar from "./components/CategoryNavbar"


const App = () => {
  return (
    <Router>
      <ScrollerOnTop />
      <ScrollToTop
        smooth
        className="flex items-center justify-center bg-customPlum dark:bg-darkAccent text-white dark:text-darkBg rounded-full shadow-md hover:bg-customDeepPlum dark:hover:bg-darkSubtle transition-all duration-300"
      />

      <div className="bg-white dark:bg-darkBg min-h-screen">
      <PreHeader />
      <Header />
      <CategoryNavbar />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/store-policy" element={<StorePolicy />} />
          <Route path="/return-exchange-policy" element={<ReturnExchange />} />
          <Route path="/international-orders" element={<InternationalShipping />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/size-guide" element={<SizeGuide />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/faqs" element={<Faq />} />

          {/* navbar */}
          <Route path="/short-kurti" element={<ShortKurti />} />
          <Route path="/long-kurti" element={<LongKurti />} />
          <Route path="/kurti-set" element={<KurtiSet />} />
          <Route path="/clofer-luxe" element={<CloferLuxe />} />
          <Route path="/bottoms" element={<Bottoms />} />
          <Route path="/clofer-crestline" element={<CloferCrestline />} />

          {/* Product Pages */}
          <Route path="/newarrival/product/:id" element={<ProductPage />} />
          <Route path="/bestseller/product/:id" element={<ProductPage />} />
          <Route path="/short-kurti/product/:id" element={<ProductPage />} />
          <Route path="/long-kurti/product/:id" element={<ProductPage />} />
          <Route path="/kurti-set/product/:id" element={<ProductPage />} />
          <Route path="/clofer-luxe/product/:id" element={<ProductPage />} />
          <Route path="/bottoms/product/:id" element={<ProductPage />} />
          <Route path="/clofer-crestline/product/:id" element={<ProductPage />} />

          {/* Future routes for other pages can be added here */}
        </Routes>
      
      <Footer />
      </div>
    </Router>
  );
};

export default App;
