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
    this.sizeList = [100, 200, 300, 400, 500]
    this.caseRangeList = [0, 100, 1000, 10000, 100000, 100000000000]
    this.data = props.data
  }

  convertData() {
    const GeoJsonList = []
    if (this.data) {
      for (let i = 0; i < 5; i++) {
        var GeoJson = {
          'type': 'geojson',
          'data': {
            'type': 'FeatureCollection',
            'features': []
          }
        }
        this.data.map(item => {
          if (this.caseRangeList[i] <= item.cases && this.caseRangeList[i + 1] > item.cases) {
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
                'flag': item.countryInfo.flag,
              }
            })
          }
        })
        GeoJsonList.push(GeoJson)
      }
    }
    return GeoJsonList
  }

  componentDidMount() {
    const geoJsonList = this.convertData()
    const dotNameArr = []
    const sourceNameArr = []

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    const Dot = [pulsingDot(75, map), pulsingDot(100, map), pulsingDot(125, map), pulsingDot(150, map), pulsingDot(175, map)]

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });

    map.on('load', function () {
      map.resize();
      for (let i = 0; i < 5; i++) {
        if (!map.getSource(sourceNameArr[i])) {
          dotNameArr.push('pulsing-dot' + (i + 1).toString())
          sourceNameArr.push('pointsType' + (i + 1).toString())
          map.addImage(dotNameArr[i], Dot[i], { pixelRatio: 2 })
          if (geoJsonList && !map.getSource(sourceNameArr[i])) {
            try {
              map.addSource(sourceNameArr[i], geoJsonList[i]);
            }
            catch (err) {
            }
            if (map.getSource(sourceNameArr[i])) {
              map.addLayer({
                'id': sourceNameArr[i],
                'type': 'symbol',
                'source': sourceNameArr[i],
                'layout': {
                  'icon-image': dotNameArr[i]
                }
              });
            }
            var popup = new mapboxgl.Popup({
              closeOnClick: false,
              closeButton: false,
            });

            for (let i = 0; i < 5; i++) {
              map.on('mouseenter', sourceNameArr[i], function (e) {
                // Change the cursor style as a UI indicator.
                map.getCanvas().style.cursor = 'pointer';
                var coordinates = e.features[0].geometry.coordinates.slice();
                var name = e.features[0].properties.name;
                var cases = e.features[0].properties.cases;
                var deaths = e.features[0].properties.deaths;
                var recovered = e.features[0].properties.recovered;
                var flag = e.features[0].properties.flag;

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
                  .setHTML('')
                  .addTo(map)
                if (popup.isOpen()) {
                  ReactDOM.render(
                    <CountryCard name={name} cases={cases} deaths={deaths} recovered={recovered} flag={flag} />,
                    document.querySelector('.mapboxgl-popup-content')
                  );
                }
              });

              map.on('mouseleave', sourceNameArr[i], function () {
                map.getCanvas().style.cursor = '';
                popup.remove();
              });
            }
          }
        }
      }
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