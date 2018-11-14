import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Aux from "../../hoc/Aux/Aux";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 7.41,
      lng: 3.95
    },
    zoom: 11
  };

  render() {
    return (
      <Aux>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={7.410979}
            lng={3.951922}
            text={"Kreyser Avrora"}
          />
        </GoogleMapReact>
      </Aux>
    );
  }
}

export default Map;
