import React, { useRef, useEffect } from "react";

import "./map.css";

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    const mapStyles = [
      {
        //hide all fills
        elementType: "geometry.fill",
        stylers: [{ visibility: "on" }],
      },
      {
        featureType: "administrative.country",
        elementType: "geometry.fill",
        stylers: [{ visibility: "on" }],
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry.fill",
        stylers: [{ visibility: "off" }],
      },
    ];
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
      styles: mapStyles,
      backgroundColor: "hsla(0, 0%, 0%, 0)",
      disableDefaultUI: true,

    });

    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom,]);

  return <div ref={mapRef} className={`map`}></div>;
};

export default Map;
