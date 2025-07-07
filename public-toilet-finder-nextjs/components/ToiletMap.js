import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import L from 'leaflet';

export default function ToiletMap() {
  const [toilets, setToilets] = useState([]);

  useEffect(() => {
    // Replace with a real backend call or static JSON for now
    setToilets([
      {
        id: 1,
        name: "St. Stephen's Green Park Toilet",
        lat: 53.3382,
        lng: -6.2591,
      },
      {
        id: 2,
        name: "Phoenix Park Visitor Centre Toilet",
        lat: 53.355,
        lng: -6.329,
      },
    ]);
  }, []);

  const DefaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <MapContainer center={[53.3498, -6.2603]} zoom={13} scrollWheelZoom={true} style={{ height: '600px', width: '100%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {toilets.map((toilet) => (
        <Marker key={toilet.id} position={[toilet.lat, toilet.lng]}>
          <Popup>
            {toilet.name}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}