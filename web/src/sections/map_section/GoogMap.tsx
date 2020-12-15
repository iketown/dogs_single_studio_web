import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { FaHome } from "react-icons/fa";
import greyMapStyle from "./greyMapStyle.json";
const MapMarker: React.FC<{
  lat: number;
  lng: number;
}> = ({ children }) => <div>{children}</div>;

const defaultCenter = {
  lat: 59.95,
  lng: 30.33,
};
const defaultZoom = 10;
const SimpleMap: React.FC<{ center: any; zoom?: number }> = ({
  center = defaultCenter,
  zoom = defaultZoom,
}) => {
  const mapOptions = {
    styles: greyMapStyle,
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "350px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={mapOptions}
      >
        <MapMarker lat={center.lat} lng={center.lng}>
          <FaHome
            size="1.5rem"
            color="var(--color-darkB)"
            style={{
              transform: "translate(-50%,-50%)",
              display: "inline-block",
            }}
          />
        </MapMarker>
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
