import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { CardContent, Paper, CardHeader, Button } from '@material-ui/core';


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
  },
  title: {
    color: 'white',
    fontWeight: 'bold'
  },
}));

const DATA = [
  {
    id: 1,
    fullName: "An Nguyen",
    location: "Cau Giay",
    medicalFacility: "Benh vien Hong Ngoc",
    role: "Doctor",
    needs: ["Meals", "Drinks"],
    details: "White masks"
  },
  {
    id: 2,
    fullName: "Binh Nguyen",
    location: "Thanh Xuan",
    medicalFacility: "Bach Mai",
    role: "Surgeon",
    needs: ["Coffee", "Tea"],
    details: "Sugar free"
  },
  {
    id: 3,
    fullName: "Chris Dev",
    location: "Hoan Kiem",
    medicalFacility: "Vin Mec",
    role: "Nurse",
    needs: ["Cookies", "Ice cream"],
    details: "Non-fat"
  }
]

const RequestResponse = () => {
  const classes = useStyles();
  const { id } = useParams();

  return (
    <Paper elevation={3} rounded style={{ marginBottom: '30px' }}>
      <CardHeader
        style={{}}
        title={DATA[id - 1].fullName}
        subheader={DATA[id - 1].role + " | " + DATA[id - 1].medicalFacility}
        className={classes.reqres}
        classes={{
          title: classes.title,
          subheader: classes.subheader
        }}
      />
      <CardContent>
        <p><strong>LOCATION</strong></p>
        <p>{DATA[id - 1].location}</p>
        <p><strong>NEEDS</strong></p>
        <ul>
          {DATA[id - 1].needs.map(item => (
            <li>{item}</li>
          ))}
        </ul>
        <p><strong>DETAILS</strong></p>
        <p>{DATA[id - 1].details}</p>
      </CardContent>
      <Button style={{ backgroundColor: '#F65058FF', color: 'white' }}>Offer Help</Button>
    </Paper>
  )
}

export default RequestResponse;
