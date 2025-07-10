import "leaflet/dist/leaflet.css";
// import { MapContainer } from 'react-leaflet';
// frontend\node_modules\leaflet\dist\leaflet.js.map
import {} from '../../../node_modules/leaflet/dist/leaflet.js.map'
function Map() {
  return (
    <div className="w-full h-[40vh] md:h-[50vh] overflow-hidden">
      <MapContainer
        center={[35.7, 51.39]}
        zoom={20}
        minZoom={5}
        attributionControl={false}
        // zoomControl={false}
        style={{ width: "100%", height: "100%" }}
      >
        {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
      </MapContainer>
    </div>
  );
}

export default Map;
