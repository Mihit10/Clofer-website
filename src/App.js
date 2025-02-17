import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Import Home page
import PreHeader from "./components/PreHeader"
import Header from "./components/Header"


const App = () => {
  return (
    <Router>
      <div className="bg-white dark:bg-darkBg min-h-screen">
      <PreHeader />
      <Header />


        <Routes>
          <Route path="/" element={<Home />} />
          {/* Future routes for other pages can be added here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
