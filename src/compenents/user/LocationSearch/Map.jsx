import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import React from "react";
import {Box} from "@mui/material"



const libraries = ['places'];
const mapContainerStyle = {
  width: '480px',
  height: '100%',
  borderRadius: "24px"
};
const center = {
  lat: 51.5072, // default latitude
  lng: 0.1276, // default longitude
};


const MapComponent = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCNCf5okYPi6OMy5KGnLbox9Kbc_xI2vlM",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <Box sx={{
      width: "512px",
      height: "470px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      p: "10px 0"
    }}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </Box>
  );
};

export default MapComponent;