import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import StorePolicy from "./pages/StorePolicy";
import ReturnExchange from "./pages/ReturnExchange";
import InternationalShipping from "./pages/InternationalShipping";
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


const App = () => {
  return (
    <Router>
      <div className="bg-white dark:bg-darkBg min-h-screen">
      <PreHeader />
      <Header />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/store-policy" element={<StorePolicy />} />
          <Route path="/return-exchange-policy" element={<ReturnExchange />} />
          <Route path="/international-orders" element={<InternationalShipping />} />

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
