import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const Map = () => {
  const position: [number, number] = [34.7818, 32.0853]; // Tel Aviv coords

  return (
    <MapContainer center={position} zoom={10} className="map-container">
      <TileLayer url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`} />
      <Marker position={position} />
    </MapContainer>
  );
};

export default Map;
