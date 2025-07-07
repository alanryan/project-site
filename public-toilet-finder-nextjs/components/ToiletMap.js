import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import L from 'leaflet';

export default function ToiletMap() {
  const [toilets, setToilets] = useState([]);

  useEffect(() => {
    fetch('/api/toilets')
      .then(res => res.json())
      .then(data => setToilets(data));
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
            <strong>{toilet.name}</strong><br />
            Wheelchair: {toilet.wheelchair ? 'Yes' : 'No'}<br />
            Baby Changing: {toilet.babyChanging ? 'Yes' : 'No'}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
