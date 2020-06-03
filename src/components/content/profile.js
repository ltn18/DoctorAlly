import React,{useContext, useState, useEffect} from 'react';
import authContext from "../context/auth"
import { Button, MenuItem, FormControl, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import withAuth from "../../hoc/authHoc"

const fetchData = async () => {
  const response = await fetch("http://localhost:5000/helpRequest/")
  const resJson = await response.json()
  return resJson
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  font: {
    fontFamily: 'Merriweather',
    fontSize: "15px",
  },
  fontLogo: {
    fontFamily: 'Yeseva One',
  },
  formControl: {
    marginTop: "15px",
  },
  btn_volunteer: {
    // borderRadius: '10px',
    padding: 10,
    fontFamily: 'Faustina',
    fontSize: "15px",
    "&:hover": {
      backgroundColor: '#3f51b5',
      color: 'white',
      cursor: 'pointer',
    }
  },
  btn_request_help: {
    // borderRadius: '10px',
    padding: 10,
    fontFamily: 'Faustina',
    fontSize: "15px",
    "&:hover": {
      backgroundColor: '#c51162',
      color: 'white',
      cursor: 'pointer',
    }
  },
  btn_nearby_stores: {
    // borderRadius: '10px',
    padding: 10,
    fontFamily: 'Faustina',
    fontSize: "15px",
    backgroundColor: 'white',
    color: '#008000',
    "&:hover": {
      backgroundColor: '#008000',
      color: 'white',
      cursor: 'pointer'
    }
  }
}));
const Profile = () => {
  const classes = useStyles()
  const [helpRequestUser, setHelpRequestUser] = useState({})
  const {authUser} = useContext(authContext) 
  const [invalidate, setInvalidate] = useState(true)
  useEffect(() => {
    if(invalidate){
      fetchData()
        .then((res)=>{
          setHelpRequestUser(res.find((user) => user._id == authUser.user._id))
          setInvalidate(false) //sau khi đã lấy dữ liệu mới thì set thành false
        })
        .catch((err)=>{
          console.log(err)
        })
    }
  }, [invalidate]);
      // const doctorRequestFinal = data.find((user) => user._id == authUser.user._id)
      // setHelpRequestUser(doctorRequestFinal)
  console.log(helpRequestUser)
  return (
    <>
    {authUser ? (
      <div>
    <span>Username: {authUser.user.username}</span>   
    <span>Role: {authUser.user.role}</span>  
    <span>Id: {authUser.user._id}</span>  
    <span>{helpRequestUser ? helpRequestUser.work : null}</span>
      <Button
          variant="outlined"
          onClick={() => {}}
          className={classes.btn_nearby_stores}
          // style={{ backgroundColor: 'green', color: 'white' }}
        >Message</Button>
    </div>
    ): (<> </>)}
    </>
  );
}

export default withAuth(Profile);
