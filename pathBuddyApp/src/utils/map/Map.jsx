import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import avatarImage from "../../../public/Avatars/lazyPanda.png./../assets/Avatars/lazyPanda.png";

export default function Map() {
  const mapRef = useRef(null);
  const avatarMarkerRef = useRef(null);

  // Coordinates for Prague, Paris, and intermediate waypoints
  const prague = [50.0755, 14.4378]; // Prague
  const paris = [48.8566, 2.3522]; // Paris
  const route = [
    prague,
    [49.1951, 16.6068], // Brno
    [48.5734, 7.7521], // Strasbourg
    paris,
  ];

  const [progressKm, setProgressKm] = useState(0); // User's progress in kilometers

  useEffect(() => {
    if (mapRef.current) return;

    // Initialize the map
    const map = L.map("map").setView(prague, 6);
    mapRef.current = map;

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Add route polyline
    const routeLayer = L.polyline(route, { color: "blue", weight: 4 }).addTo(
      map
    );

    // Zoom to fit the route
    map.fitBounds(routeLayer.getBounds());

    // Add a static marker for Paris
    L.marker(paris).addTo(map).bindPopup("Paris (End Point)");

    // Create avatar icon
    const avatarIcon = L.icon({
      iconUrl: avatarImage,
      iconSize: [50, 50], // Adjust size
      iconAnchor: [25, 50], // Anchor at the base
    });

    // Initialize avatar marker at Prague
    avatarMarkerRef.current = L.marker(prague, { icon: avatarIcon })
      .addTo(map)
      .bindPopup("Start at Prague");
  }, []);

  useEffect(() => {
    if (!avatarMarkerRef.current) return;

    // Calculate the total distance of the route
    const totalDistance = route.reduce((acc, cur, idx, arr) => {
      if (idx === 0) return acc; // Skip the first point
      const prev = L.latLng(arr[idx - 1]);
      const current = L.latLng(cur);
      return acc + prev.distanceTo(current) / 1000; // Convert to kilometers
    }, 0);

    // Clamp progress to the total distance
    const clampedProgress = Math.min(progressKm, totalDistance);

    // Find the segment where the avatar currently is
    let distanceCovered = 0;
    for (let i = 0; i < route.length - 1; i++) {
      const start = L.latLng(route[i]);
      const end = L.latLng(route[i + 1]);
      const segmentDistance = start.distanceTo(end) / 1000; // Segment distance in kilometers

      if (clampedProgress <= distanceCovered + segmentDistance) {
        // Calculate the avatar's position on this segment
        const segmentProgress =
          (clampedProgress - distanceCovered) / segmentDistance;
        const avatarLat = start.lat + segmentProgress * (end.lat - start.lat);
        const avatarLng = start.lng + segmentProgress * (end.lng - start.lng);

        // Update avatar position
        avatarMarkerRef.current.setLatLng([avatarLat, avatarLng]);
        avatarMarkerRef.current.setPopupContent(
          `Progress: ${clampedProgress.toFixed(2)} km`
        );
        break;
      }
      distanceCovered += segmentDistance;
    }
  }, [progressKm]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div id="map" style={{ height: "90%" }}></div>
      <div
        style={{
          height: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          type="number"
          placeholder="Enter kilometers walked"
          style={{ padding: "10px", fontSize: "16px", width: "200px" }}
          onChange={(e) => setProgressKm(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
