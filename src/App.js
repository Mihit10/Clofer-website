import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import StorePolicy from "./pages/StorePolicy";
import ReturnExchange from "./pages/ReturnExchange";
import InternationalShipping from "./pages/InternationalShipping";
import ProductPage from "./pages/ProductPage";

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
          <Route path="/bestseller/product/:id" element={<ProductPage />} />
          {/* Future routes for other pages can be added here */}
        </Routes>
      
      <Footer />
      </div>
    </Router>
  );
};

export default App;
