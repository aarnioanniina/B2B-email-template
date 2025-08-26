import React from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

const MainLayout = () => {
  return (
    <div className="mainLayout">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};
export default MainLayout;
