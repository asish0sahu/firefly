/* eslint-disable no-unused-vars */
import React from "react";
import Headers from "./components/Header";
import Abouts from "./components/About";
import ProductLists from "./components/ProductList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Headers />
      <Abouts />
      <ProductLists/>
      <Footer />
    </>
  );
};

export default App;
