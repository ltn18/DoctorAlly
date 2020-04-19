import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import mapboxgl from 'mapbox-gl';

import pulsingDot from './pulsingDot';
import CountryCard from './countryCard';

const [lng, lat, zoom] = [105.8380, 21.0269, 14.52]; // Hanoi
const [clng, clat, czoom] = [5, 34, 2]; // World

mapboxgl.accessToken = 'pk.eyJ1IjoiaG9hbmdtaW5obmciLCJhIjoiY2s5M25xYTMwMDRhZDNpcDNhOHN1cDRnciJ9.NvYOhaROmMb04qeJyIbG-A';

class CovidMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2
    };
    this.data = props.data
  }

  convertData() {
    const GeoJson = {
      'type': 'geojson',
      'data': {
        'type': 'FeatureCollection',
        'features': []
      }
    }
    // console.log(this.props.data)
    if (this.data) {
      this.data.map(item => {
        GeoJson.data.features.push({
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [item.countryInfo.long, item.countryInfo.lat]
          },
          'properties': {
            'name': item.country,
            'cases': item.cases,
            'deaths': item.deaths,
            'recovered': item.recovered,
          }
        })
      })
    }
    return GeoJson
  }

  componentDidMount() {
    const geoJson = this.convertData()
    console.log(geoJson)

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    var Dot = pulsingDot(200, map)

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });

    map.on('load', function () {
      map.resize();
      map.addImage('pulsing-dot', Dot, { pixelRatio: 2 });
      if (geoJson) {
        map.addSource('points', geoJson);
      }

      map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': 'points',
        'layout': {
          'icon-image': 'pulsing-dot'
        }
      });
    });

    var popup = new mapboxgl.Popup({
      closeOnClick: false,
      closeButton: false,
    });

    map.on('mouseenter', 'points', function (e) {
      // Change the cursor style as a UI indicator.
      map.getCanvas().style.cursor = 'pointer';

      var coordinates = e.features[0].geometry.coordinates.slice();
      var name = e.features[0].properties.name;
      var cases = e.features[0].properties.cases;
      var deaths = e.features[0].properties.deaths;
      var recovered = e.features[0].properties.recovered;

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      // Populate the popup and set its coordinates
      // based on the feature found.

      popup
        .setLngLat(coordinates)
        .setHTML('12')
        .addTo(map)
      if (popup.isOpen()) {
        ReactDOM.render(
          <CountryCard name={name} cases={cases} deaths={deaths} recovered={recovered} />,
          document.querySelector('.mapboxgl-popup-content')
        );
      }

    });

    map.on('mouseleave', 'points', function () {
      map.getCanvas().style.cursor = '';
      popup.remove();
    });
  }

  render() {

    return (
      <div>
        <div className='sidebarStyle' style={{ margin: '10px' }}>
          <div><strong>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</strong></div>
        </div>
        <div ref={el => this.mapContainer = el} className='mapContainer' style={{ height: '75vh' }} />
      </div>
    )
  }
}

export default CovidMap;