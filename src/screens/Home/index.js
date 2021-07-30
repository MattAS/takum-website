import React from "react";
import { NavBarContainer } from "../../containers/Home/NavBar/NavBar";
import { LandingContainer } from "../../containers/Home/Landing/Landing";
import { ProductContainer } from "../../containers/Home/Product/Product";
import { LawyerContainer } from "../../containers/Home/Lawyer/Lawyer";
import { FooterContainer } from "../../containers/Home/Footer/Footer";
export const Home = () => {
  return (
    <>
      <NavBarContainer />
      <LandingContainer />
      <ProductContainer />
      <LawyerContainer />
      <FooterContainer />
    </>
  );
};
