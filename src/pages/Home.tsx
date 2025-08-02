import Map from "../components/Map";
import TruckSelector from "../components/TruckSelector";
import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [selectedTruck, setSelectedTruck] = useState<string | null>(null);

  return (
    <div className="home-wrapper">
      <h1 className="home-title">AI Truck Helper</h1>
      <div className="home-truck-selector">
        <TruckSelector onSelect={setSelectedTruck} />
      </div>
      {selectedTruck && (
        <p className="home-selected-truck">Selected Truck: {selectedTruck}</p>
      )}
      <div className="home-map">
        <Map />
      </div>
    </div>
  );
};

export default Home;
