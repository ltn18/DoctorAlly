import React, { Component, useContext, useEffect, useState } from 'react';
import localeContext, { getText } from '../../context/localeCtx';

import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

import axios from 'axios';

mapboxgl.accessToken = 'pk.eyJ1IjoiaG9hbmdtaW5obmciLCJhIjoiY2s5M25xYTMwMDRhZDNpcDNhOHN1cDRnciJ9.NvYOhaROmMb04qeJyIbG-A';
const [lng, lat, zoom] = [105.8380, 21.0269, 14.52]; // Hanoi

function Map() {
  const locale = useContext(localeContext)
  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    marker: false,
    placeholder: getText("supply_stores", "search_placeholder", locale.lang),
    bbox: [105.73333, 20.88333, 106.03333, 21.38333],
    proximity: {
      longitude: lng,
      lattitude: lat,
    },
    limit: false,
  })
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });

    var marker = new mapboxgl.Marker({ 'color': '#008000' })
    map.addControl(geocoder, 'top-left')

    map.on('load', function () {
      map.addSource('selected-point', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      });

      geocoder.on('result', async function (e) {
        map.getSource('selected-point').setData(e.result.geometry);
        var point = e.result.center;
        var tileset = 'mapbox.mapbox-streets-v8'
        var radius = 2000; //meters
        var limit = 50; // The maximum amount of results to return
        var layers = 'poi_label'
        var query = 'https://api.mapbox.com/v4/' + tileset + '/tilequery/' + point[0] + ',' + point[1] + '.json?radius=' + radius + '&limit=' + limit + '&layers=' + layers + '&access_token=' + mapboxgl.accessToken;
        marker.setLngLat(point).addTo(map);

        // fetch data and make geojson data
        const result = await axios.get(query)
        result.data.features = result.data.features.filter((item) => {
          if (item.properties.class === 'store_like' || item.properties.class === 'food_and_drink' || item.properties.class === 'food_and_drink_stores') {
            return item
          }
        })
        map.getSource('tilequery').setData(result.data);

      });

      map.addSource('tilequery', {
        type: "geojson",
        data: {
          "type": "FeatureCollection",
          "features": []
        }
      });

      map.addLayer({
        id: "tilequery-points",
        type: "circle",
        source: "tilequery",
        paint: {
          "circle-stroke-color": "white",
          "circle-stroke-width": {
            stops: [
              [0, 0.1],
              [18, 3]
            ],
            base: 5
          },
          "circle-radius": {
            stops: [
              [12, 6],
              [22, 180]
            ],
            base: 6
          },
          "circle-color": [
            'match',
            ['get', 'type'],
            'Convenience Store', '#FF8C00',
            'Convenience Store With Gas', '#FF8C00',
            'Convenience', '#FF8C00',
            'Pharmacy', '#FF8C00',
            'Specialty Food Store', '#00FFFF',
            'Fast Food', '#9ACD32',
            'Cafe', '#9ACD32',
            'Bakery', '#9ACD32',
            'Small Grocery Store', '#008000',
            'Supercenter', '#008000',
            'Superette', '#008000',
            'Supermarket', '#008000',
            'Restaurant', '#00FFFF',
            '#FF0000' // any other store type
          ]
        }
      });

      var popup = new mapboxgl.Popup;

      map.on('mouseenter', 'tilequery-points', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        if (e.features[0].properties.name) {
          var title = '<h3>' + e.features[0].properties.name + '</h3>';
        } else {
          var title = '<h3>No Name</h3>';
        }
        var storeType = '<h4>' + e.features[0].properties.type + '</h4>';

        var obj = JSON.parse(e.features[0].properties.tilequery);
        var distance = '<p>' + (obj.distance).toFixed(0) + 'm from location' + '</p>';

        var coordinates = new mapboxgl.LngLat(e.features[0].geometry.coordinates[0], e.features[0].geometry.coordinates[1]);
        var content = title + storeType + distance;

        popup.setLngLat(coordinates)
          .setHTML(content)
          .addTo(map);
      })

      map.on('mouseleave', 'tilequery-points', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
      });
    })
  }, [locale])

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div id="geocoder1" class="geocoder"></div>
        <div id="geocoder2" class="geocoder"></div>
      </div>

      <div id='map' style={{ height: '75vh', width: '100%', marginBottom: '20px' }} />
    </>
  )
}


// const StoreMap = () => {
//   const locale = useContext(localeContext);
//   return <Map locale={locale} />
// };

export default Map;




