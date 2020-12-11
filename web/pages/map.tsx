import React from "react";
import { StaticGoogleMap, Marker } from "react-static-google-map";
const MapPage = () => {
  const location = {
    _type: "geopoint",
    lat: 35.99208,
    lng: -86.75676659999999,
  };
  const nearestCity = {
    lat: 36.1626638,
    lng: -86.7816016,
  };
  const params = {
    center: location,
    width: 600,
    height: 300,
  };
  return (
    <div>
      map page
      <StaticGoogleMap
        visible={`${nearestCity.lat},${nearestCity.lng}`}
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        size={`${params.width}x${params.height}`}
      >
        <Marker color="blue" location={`${location.lat},${location.lng}`} />
      </StaticGoogleMap>
    </div>
  );
};

export default MapPage;
