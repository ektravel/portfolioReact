import React, { Component } from 'react';
import { Map as LeafletMap, TileLayer, Marker} from 'react-leaflet';
import "./MapView.css";

class MapView extends Component {
  render() {
    return (
      <LeafletMap
        center={[30.262032629, -97.753558159]}
        zoom={10}
        maxZoom={18}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.45}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={[30.262032629, -97.753558159]}>
        </Marker>
      </LeafletMap>
    );
  }
}

export default MapView;