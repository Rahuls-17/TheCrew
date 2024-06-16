import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Services from "./pages/Services.jsx";
import OurWork from "./pages/OurWork.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-work" element={<OurWork />} />
      </Routes>
    </>
  );
};

export default App;
