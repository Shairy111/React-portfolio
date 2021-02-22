import React from "react";
import CategoryScreen from "./CategoryScreen";
import HomeSVG from "../svg/homeSVG";

function HomeScreen() {
  return (
    <>
      <HomeSVG />
      <CategoryScreen
        web="/Category/WebDevelopment"
        dataScience="Category/MachineLearning"
      />
    </>
  );
}

export default HomeScreen;
