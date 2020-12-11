import React from "react";
import { StaticGoogleMap, Marker } from "react-static-google-map";

const StaticMap = ({ location, nearestCity, width = 500, height = 300 }) => {
  return (
    <StaticGoogleMap
      visible={`${nearestCity.lat},${nearestCity.lng}`}
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
      size={`${Math.floor(width)}x${Math.floor(height)}`}
    >
      <Marker color="blue" location={`${location.lat},${location.lng}`} />
    </StaticGoogleMap>
  );
};

export default StaticMap;
