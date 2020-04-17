import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const KEY = 'AIzaSyAWvAWfrCh1e1anFy-ucRdryT0uLh38QL0';
const ALT_KEY = "AIzaSyCw1Cu5QmZqsFLWq-D7m12E3Qqjjj13xWY";
const Maps = () => {
  const [center, setCenter] = useState({ lat: 11.0168, lng: 76.9558 });
  const [zoom, setZoom] = useState(11);
  return (
    <div style={{ height: '50vh', width: '100%', marginTop: 20 }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: KEY}}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent
          lat={11.0168}
          lng={76.9558}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

export default Maps;




