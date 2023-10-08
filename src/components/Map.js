// Map.js

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet's CSS
import withMapData from './mock/hoc/withMapData';

const Map = ({ selectedPlace }) => {
  const mapRef = useRef(null); // Use a ref to store the map instance
  const markerRef = useRef(null); // Use a ref to store the marker instance

  useEffect(() => {
    if (!mapRef.current) {
      // Create a map if it's not already initialized
      mapRef.current = L.map('map').setView([0, 0], 2); // Default view with no marker

      // Add a tile layer (you can choose a different tile provider)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
    }

    if (selectedPlace && selectedPlace.lat !== undefined && selectedPlace.lng !== undefined) {
      // Create a marker if selectedPlace is provided
      if (!markerRef.current) {
        markerRef.current = L.marker([selectedPlace.lat, selectedPlace.lng])
          .addTo(mapRef.current)
          .bindPopup(selectedPlace.description)
          .openPopup();
      } else {
        // Update marker position if it already exists
        markerRef.current.setLatLng([selectedPlace.lat, selectedPlace.lng]);
        markerRef.current.getPopup().setContent(selectedPlace.description);
      }

      // Set the view to the selected place's coordinates
      mapRef.current.setView([selectedPlace.lat, selectedPlace.lng], 13);
    }
  }, [selectedPlace]);

  return (
    <div>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
};

export default withMapData(Map);