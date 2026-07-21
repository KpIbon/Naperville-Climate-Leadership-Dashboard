'use client';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { organizations } from '@/lib/data';
import 'leaflet/dist/leaflet.css';

const iconCache = new Map<string, L.DivIcon>();
function makeIcon(color: string) {
  if (!iconCache.has(color)) iconCache.set(color, L.divIcon({ className: '', html: `<span style="display:block;width:14px;height:14px;border-radius:50%;background:${color};border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,.25)"></span>`, iconSize: [14, 14], iconAnchor: [7, 7] }));
  return iconCache.get(color)!;
}

export default function OrganizationMap() {
  return <MapContainer center={[41.775, -88.16]} zoom={12.5} scrollWheelZoom={false} zoomControl={true}>
    <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {organizations.map((organization) => <Marker key={organization.id} position={[organization.lat, organization.lng]} icon={makeIcon(organization.color)}>
      <Popup><div style={{ minWidth: 180 }}><strong>{organization.name}</strong><br /><span>{organization.category} · {organization.level}</span><br /><small>{organization.address}</small></div></Popup>
    </Marker>)}
  </MapContainer>;
}
