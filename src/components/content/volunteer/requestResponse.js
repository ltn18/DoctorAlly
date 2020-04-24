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


const fetchData = async () =>{
  const response = await fetch("http://localhost:5000/helpRequest")
  const resJson = await response.json()
  return resJson
}

const fetchDataVolunteer = async () =>{
  const response = await fetch("http://localhost:5000/volunteer")
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


  useEffect(() => {
    if(invalidate){
      fetchData()
        .then((res)=>{  
          console.log(res)
          setRequestData(res)
          const currentRequest = res.find((req) => req._id === id)
          setThisRequest(currentRequest)
          console.log(currentRequest)
          setInvalidate(false) 
        })
        .catch((err)=>{
          console.log(err)
        })
    }
  }, [invalidate]);

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
        onClick={() => history.push(`/offer_help/${thisRequest._id}`)}      
      >Offer Help</Button>
    </Paper>
  )
}

export default RequestResponse;
