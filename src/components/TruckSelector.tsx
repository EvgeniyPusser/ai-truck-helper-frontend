import { useState, useEffect } from "react";
import trucks from "../data/trucks.json";

const TruckSelector = ({
  onSelect,
}: {
  onSelect: (truckId: string) => void;
}) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option>Select a truck</option>
      {trucks.map((truck) => (
        <option key={truck.id} value={truck.id}>
          {truck.name} - {truck.capacity}
        </option>
      ))}
    </select>
  );
};

export default TruckSelector;
