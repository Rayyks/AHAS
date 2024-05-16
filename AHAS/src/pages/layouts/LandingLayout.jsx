import React from "react";
import LandingNavbar from "../../components/header-footer/LandingNavbar";
import LandingFooter from "../../components/header-footer/LandingFooter";
import usePageChanger from "../../hooks/usePageChanger";

const LandingLayout = () => {
  const CurrentPage = usePageChanger.UseLayoutPageChanger();
  return (
    <main>
      <LandingNavbar />
      {CurrentPage}
      <LandingFooter />
    </main>
  );
};

export default LandingLayout;
