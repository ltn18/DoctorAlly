import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { CardContent, Paper, CardHeader, Button } from '@material-ui/core';
import axios from "axios"

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
const fetchNearbyStoreDataLocation = async () =>{
  // const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=21.025417,105.835258&radius=1500&type=restaurant&key=AIzaSyA8yp4aWovCABcBT6o6H21ZcBAwQqz3XdI`)
  const response = await fetch("https://nominatim.openstreetmap.org/search?q=33 Hoang Cau Dong Da Ha Noi&format=json&polygon_geojson=1&addressdetails=1")
  const resJson = await response.json()
  return resJson
}


const fetchData = async () =>{
  const response = await fetch("http://localhost:5000/helpRequest")
  const resJson = await response.json()
  return resJson
}


const RequestResponse = () => {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();
  const [requestData, setRequestData] = useState([])
  const [invalidate,setInvalidate] = useState(true)
  const [thisRequest, setThisRequest] = useState({})

  const [invalidate2,setInvalidate2] = useState(true)
  const [location, setLocation] = useState({
    lat: 0,
    lon: 0
  })

  console.log(location)

  const handlerOfferHelp = () =>{
    history.push(`/offer_help/${thisRequest._id}?lat=${location.lat}&lon=${location.lon}`)
    // console.log(location)

  }

  useEffect(() => {
    if(invalidate){
      fetchData()
        .then((res)=>{  
          // console.log(res)
          setRequestData(res)
          const currentRequest = res.find((req) => req._id === id)
          setThisRequest(currentRequest)
          // console.log(currentRequest)
          setInvalidate(false) 
        })
        .catch((err)=>{
          console.log(err)
        })
    }
  }, [invalidate]);

  
  useEffect(() => {
    if(invalidate2){
      fetchNearbyStoreDataLocation()
        .then((res)=>{
          // console.log(res[0])
          setLocation({
            lat:res[0].lat,
            lon:res[0].lon
          })
          setInvalidate2(false)
        })
        .catch((err)=>{
          console.log(err)
        })
    }
  }, [invalidate2]);

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
          {thisRequest.work && thisRequest.work.map((wor)=>{
            return wor + ", "
          })}
        <p><strong>DETAILS</strong></p>
        <p>{thisRequest.describeRequest}</p>
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
