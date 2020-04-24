import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
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
    fontFamily: 'Lexend Giga',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Lexend Giga',
  },
}));

const DATA = [
  {
    id: 1,
    name: "An Nguyen",
    location: "Cau Giay",
    facility: "Benh vien Hong Ngoc",
    role: "Doctor",
    needs: ["Meals", "Drinks"],
    details: "White masks"
  },
  {
    id: 2,
    name: "Binh Nguyen",
    location: "Thanh Xuan",
    facility: "Bach Mai",
    role: "Surgeon",
    needs: ["Coffee", "Tea"],
    details: "Sugar free"
  },
  {
    id: 3,
    name: "Chris Dev",
    location: "Hoan Kiem",
    facility: "Vin Mec",
    role: "Nurse",
    needs: ["Cookies", "Ice cream"],
    details: "Non-fat"
  },
  {
    id: 4,
    name: "Chris Dev",
    location: "Hoan Kiem",
    facility: "Vin Mec",
    role: "Nurse",
    needs: ["Cookies", "Ice cream"],
    details: "Non-fat"
  },
  {
    id: 5,
    name: "Chris Dev",
    location: "Hoan Kiem",
    facility: "Vin Mec",
    role: "Nurse",
    needs: ["Cookies", "Ice cream"],
    details: "Non-fat"
  },
  {
    id: 6,
    name: "Chris Dev",
    location: "Hoan Kiem",
    facility: "Vin Mec",
    role: "Nurse",
    needs: ["Cookies", "Ice cream"],
    details: "Non-fat"
  },
  {
    id: 7,
    name: "Chris Dev",
    location: "Hoan Kiem",
    facility: "Vin Mec",
    role: "Nurse",
    needs: ["Cookies", "Ice cream"],
    details: "Non-fat"
  },
  {
    id: 8,
    name: "Chris Dev",
    location: "Hoan Kiem",
    facility: "Vin Mec",
    role: "Nurse",
    needs: ["Cookies", "Ice cream"],
    details: "Non-fat"
  },
  {
    id: 9,
    name: "Chris Dev",
    location: "Hoan Kiem",
    facility: "Vin Mec",
    role: "Nurse",
    needs: ["Cookies", "Ice cream"],
    details: "Non-fat"
  },
  {
    id: 10,
    name: "Chris Dev",
    location: "Hoan Kiem",
    facility: "Vin Mec",
    role: "Nurse",
    needs: ["Cookies", "Ice cream"],
    details: "Non-fat"
  },
  {
    id: 11,
    name: "Chris Dev",
    location: "Hoan Kiem",
    facility: "Vin Mec",
    role: "Nurse",
    needs: ["Cookies", "Ice cream"],
    details: "Non-fat"
  }
]

const RequestResponse = () => {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();

  return (
    <Paper elevation={3} rounded style={{ marginBottom: '30px' }}>
      <CardHeader
        title={DATA[id - 1].name}
        subheader={DATA[id - 1].role + " | " + DATA[id - 1].facility}
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
      <Button
        style={{
          backgroundColor: '#F65058FF',
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'Lexend Giga'
        }}
        onClick={() => history.push("/offer_help")}
      >
        Offer Help
      </Button>
    </Paper>
  )
}

export default RequestResponse;
