import React from "react";
import { StaticGoogleMap, Marker } from "react-static-google-map";

const locationX = {
  _type: "geopoint",
  lat: 35.99208,
  lng: -86.75676659999999,
};
const nearestCityX = {
  lat: 36.1626638,
  lng: -86.7816016,
};

const GoogleStaticMap: React.FC<{
  location: { lat: number; lng: number };
  nearestCity: { lat: number; lng: number };
  width?: number;
  height?: number;
}> = ({
  location = locationX,
  nearestCity = nearestCityX,
  width = 600,
  height = 300,
}) => {
  return (
    <div>
      <StaticGoogleMap
        visible={`${nearestCity.lat},${nearestCity.lng}`}
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        size={`${width}x${height}`}
      >
        <Marker color="blue" location={`${location.lat},${location.lng}`} />
      </StaticGoogleMap>
    </div>
  );
};

export default GoogleStaticMap;
