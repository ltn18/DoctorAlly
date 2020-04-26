import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { CardContent, Paper, CardHeader, Button } from '@material-ui/core';
import axios from "axios";
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiaG9hbmdtaW5obmciLCJhIjoiY2s5M25xYTMwMDRhZDNpcDNhOHN1cDRnciJ9.NvYOhaROmMb04qeJyIbG-A';

const useStyles = makeStyles(() => ({
  reqres: {
    display: 'flex',
    marginTop: '20px',
    padding: 10,
    backgroundColor: '#F65058FF',
  },
  subheader: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Lexend Giga',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Lexend Giga',
  },
}));
const fetchNearbyStoreDataLocation = async (location) => {
  // const response = await fetch(https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=21.025417,105.835258&radius=1500&type=restaurant&key=AIzaSyA8yp4aWovCABcBT6o6H21ZcBAwQqz3XdI)
  const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${location}&format=json&polygon_geojson=1&addressdetails=1`)
  const resJson = await response.json()
  return resJson
}

const fetchNearbyStoreData = async (locationCordinate) => {
  var tileset = 'mapbox.mapbox-streets-v8'
  var radius = 2000; //meters
  var limit = 30; // The maximum amount of results to return
  var layers = 'poi_label'
  var query = 'https://api.mapbox.com/v4/' + tileset + '/tilequery/' + locationCordinate.lon + ',' + locationCordinate.lat + '.json?radius=' + radius + '&limit=' + limit + '&layers=' + layers + '&access_token=' + mapboxgl.accessToken

  const response = await fetch(query)
  const resJson = await response.json()
  return resJson
}

const fetchData = async () => {
  const response = await fetch("http://202.92.6.90:5000/helpRequest")
  const resJson = await response.json()
  return resJson
}


const RequestResponse = () => {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();
  const [requestData, setRequestData] = useState([])
  const [invalidate, setInvalidate] = useState(true)
  const [thisRequest, setThisRequest] = useState({})

  const [invalidate2, setInvalidate2] = useState(true)
  const [locationCordinate, setLocationCordinate] = useState({
    lat: 0,
    lon: 0
  })

  const [nearByStore, setNearByStore] = useState([])

  const handlerOfferHelp = () => {
    history.push(`/offer_help/${thisRequest._id}`)
    // console.log(location)

  }

  const loadStore = () => {
    const newQuery = thisRequest.location.split(" ").join("%20")
    fetchNearbyStoreDataLocation(newQuery)
      .then((res) => {
        // console.log(res[0])
        setLocationCordinate({
          lat: res[0].lat,
          lon: res[0].lon
        })
        setInvalidate2(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    if (invalidate) {
      fetchData()
        .then((res) => {
          // console.log(res)
          setRequestData(res)
          const currentRequest = res.find((req) => req._id === id)
          setThisRequest(currentRequest)
          // console.log(currentRequest)
          setInvalidate(false)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [invalidate]);


  useEffect(() => {
    fetchNearbyStoreData(locationCordinate)
      .then((res) => {
        res.features = res.features.filter((item) => {
          if (item.properties.class === 'store_like' || item.properties.class === 'food_and_drink' || item.properties.class === 'food_and_drink_stores') {
            return item
          }
        })
        setNearByStore(res.features)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [locationCordinate]);

  // const offerHelpHandler = (_id) =>{

  // }

  return (
    <Paper elevation={3} rounded style={{ marginBottom: '30px' }}>
      <CardHeader
        title={thisRequest.fullName}
        subheader={thisRequest.jobTitle + " | " + thisRequest.medicalFacility}
        className={classes.reqres}
        classes={{
          title: classes.title,
          subheader: classes.subheader
        }}
      />
      <CardContent>
        <p><strong>LOCATION</strong></p>
        <p>{thisRequest.location}</p>
        <p><strong>EMAIL</strong></p>
        <p>{thisRequest.email}</p>
        <p><strong>NEEDS</strong></p>
        {thisRequest.work && thisRequest.work.map((wor) => {
          return wor + ", "
        })}
        <p><strong>DETAILS</strong></p>
        <p>{thisRequest.describeRequest}</p>
        <p><strong>RECOMMENED NEARBY SHOP (under 2km)</strong></p>
        <ul>
          {nearByStore.map((shop) => {
            return <li>SHOP NAME: {shop.properties.name}  || SHOP TYPE: {shop.properties.type}</li>
          })}
        </ul>
        <Button onClick={loadStore}>Load Stores</Button>
      </CardContent>
      <Button
        style={{
          backgroundColor: '#F65058FF',
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'Lexend Giga'
        }}
        onClick={handlerOfferHelp}
      >Offer Help</Button>
    </Paper>
  )
}

export default RequestResponse;