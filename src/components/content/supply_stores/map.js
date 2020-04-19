import React, { Component } from 'react'

import mapboxgl from 'mapbox-gl';

const [__lng, __lat, __zoom] = [105.8380, 21.0269, 14.52]; // Hanoi
const TOKEN = "pk.eyJ1IjoiaG9hbmdtaW5obmciLCJhIjoiY2s5M25xYTMwMDRhZDNpcDNhOHN1cDRnciJ9.NvYOhaROmMb04qeJyIbG-A";
mapboxgl.accessToken = TOKEN;

class SupplyStoreMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: __lng,
      lat: __lat,
      zoom: __zoom
    };
    this.data = props.data;
  }

  convertData() {
    const GeoJsonList = [];
    if (this.data) {
      var GeoJson = {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [],
        }
      }

      this.data.map(item => {
        GeoJson.data.features.push({
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [item.lng, item.lat]
          },
          'properties': {
            'type': item.type,
            'phone': item.phone,
            'open': item.time.open,
            'closed': item.time.closed,
          }
        })
      })
    }
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    return (
      <div>
        <div className='sidebarStyle' style={{ margin: '10px' }}>
          <div><strong>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom} | Hanoi Map</strong></div>
        </div>
        <div ref={el => this.mapContainer = el} className='mapContainer' style={{ height: '75vh' }} />
      </div>
    )
  }
}

export default SupplyStoreMap;
