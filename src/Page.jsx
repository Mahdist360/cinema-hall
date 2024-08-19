import React, { useContext } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeContext } from "./context";

const page = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme === "night" ? "dark" : ""}`}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default page;
