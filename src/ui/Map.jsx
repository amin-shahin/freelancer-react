import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Map = () => {
  const defaultProps = {
    center: {
      lat: 35.7009042,
      lng: 51.3367676,
    },
    zoom: 11,
  };
  return (
    <div style={{ height: "40vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={35.7009042} lng={51.3367676} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
