import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreService from "../../components/ExploreService/ExploreService";
import ServiceDisplay from "../../components/ServiceDisplay/ServiceDisplay";
import { AppDownload } from "../../components/AppDownload/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreService category={category} setCategory={setCategory} />
      <ServiceDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
