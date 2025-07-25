import Map from "../components/Map";
import TruckSelector from "../components/TruckSelector";
import { useState } from "react";

const Home = () => {
  const [selectedTruck, setSelectedTruck] = useState<string | null>(null);

  return (
    <div>
      <h1>AI Truck Helper</h1>
      <TruckSelector onSelect={setSelectedTruck} />
      {selectedTruck && <p>Selected Truck: {selectedTruck}</p>}
      <Map />
    </div>
  );
};

export default Home;
