import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const position: [number, number] = [34.7818, 32.0853]; // Tel Aviv coords

  return (
    <MapContainer
      center={position}
      zoom={10}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`} />
      <Marker position={position} />
    </MapContainer>
  );
};

export default Map;
