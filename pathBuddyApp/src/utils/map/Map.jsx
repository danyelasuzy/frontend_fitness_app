import { useEffect, useRef, useState } from "react";
import { useMemo } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import PropTypes from "prop-types";

export default function Map({ challenge, user, progressKm, setProgressKm }) {
	const storedAvatar =
		user && user.avatarUrl ? user.avatarUrl : "/Avatars/lazyPanda.png";
	console.log("User in Map component:", user);
	console.log("Avatar URL:", storedAvatar);
	const mapRef = useRef(null);
	const avatarMarkerRef = useRef(null);
	console.log("Avatar from localStorage:", storedAvatar);
	// Coordinates and intermediate waypoints
	const startPoint = useMemo(() => {
		return challenge?.startPoint?.coordinates
			? [
					challenge.startPoint.coordinates[0],
					challenge.startPoint.coordinates[1],
			  ]
			: null;
	}, [challenge]);

	const endPoint = useMemo(() => {
		return challenge?.endPoint?.coordinates
			? [challenge.endPoint.coordinates[0], challenge.endPoint.coordinates[1]]
			: null;
	}, [challenge]);

	const route = useMemo(
		() => challenge?.route || [startPoint, endPoint],
		[challenge, startPoint, endPoint]
	);

	console.log("Start Point:", startPoint);
	console.log("End Point:", endPoint);

	useEffect(() => {
		if (!startPoint || !endPoint) return;

		if (mapRef.current) return;

		// Initialize the map
		const map = L.map("map").setView(startPoint, 6);
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

		// Add startPoint and endPoint
		L.marker(startPoint).addTo(map).bindPopup("Start Point");
		L.marker(endPoint).addTo(map).bindPopup("End Point");

		// Create avatar icon
		const avatarIcon = L.icon({
			iconUrl: storedAvatar,
			iconSize: [50, 50], // Adjust size
			iconAnchor: [25, 50], // Anchor at the base
		});

		// Initialize avatar marker at Prague
		avatarMarkerRef.current = L.marker(startPoint, { icon: avatarIcon })
			.addTo(map)
			.bindPopup("Start at Prague");
	}, [startPoint, endPoint, route, storedAvatar]);

	useEffect(() => {
		if (!avatarMarkerRef.current || !startPoint || !endPoint) return;

		const totalDistance =
			L.latLng(startPoint).distanceTo(L.latLng(endPoint)) / 1000;
		const clampedProgress = Math.min(progressKm, totalDistance);

		const progressRatio = clampedProgress / totalDistance;
		const avatarLat =
			startPoint[0] + progressRatio * (endPoint[0] - startPoint[0]);
		const avatarLng =
			startPoint[1] + progressRatio * (endPoint[1] - startPoint[1]);

		avatarMarkerRef.current.setLatLng([avatarLat, avatarLng]);
		avatarMarkerRef.current.setPopupContent(
			`Progress: ${clampedProgress.toFixed(2)} km`
		);
	}, [progressKm, startPoint, endPoint]);

	return (
		<div style={{ display: "flex", flexDirection: "column", height: "50vh" }}>
			{startPoint && endPoint ? (
				<div id="map"></div>
			) : (
				<div>Loading map...</div>
			)}
		</div>
	);
}

Map.propTypes = {
	challenge: PropTypes.shape({
		startPoint: PropTypes.shape({
			coordinates: PropTypes.arrayOf(PropTypes.number),
		}),
		endPoint: PropTypes.shape({
			coordinates: PropTypes.arrayOf(PropTypes.number),
		}),
		route: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
		name: PropTypes.string,
		distance: PropTypes.number,
		difficulty: PropTypes.string,
		img: PropTypes.string,
	}).isRequired,
};
