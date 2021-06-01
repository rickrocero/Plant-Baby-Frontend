import React, {useEffect,useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import API from '../../utils/Api'
import NavBar from "../NavBar";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LoginForm from '../LoginForm/index'
// import { Router } from "react-router";
// import Profile from './Profile'
// import Home from './Home'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Login() {
  const classes = useStyles();
  const [formState,setFormState] = useState({
    email:"",
    password:""
  })

  const [userState,setUserState] = useState({
    token:"",
    user:{
    }
  })

  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token){
      API.getUser(token).then(res=>{
        console.log(res.data);
        setUserState({
          token:token,
          user:{
            email:res.data.email,
            id:res.data.id,
            first_name:res.data.first_name,
            last_name:res.data.last_name
          }
        })
      }).catch(err=>{
        console.log("no logged in user")
        setUserState({
          token:"",
          user:{}
        })
      })
    } else {
      console.log("no token provided")
    }
    
  },[])

  const handleFormSubmit = e =>{
    e.preventDefault();
    API.login(formState).then(res=>{
      // console.log(res.data.user);
      // console.log(res.data.user.id);
      // console.log(res.data.user.first_name);
      // console.log(res.data.user.last_name);
      // console.log(res.data.user.email);
      localStorage.setItem("token",res.data.token)
      setUserState({
        ...userState,
        token:res.data.token,
        user:{
          email:res.data.email,
          first_name:res.data.first_name,
          last_name:res.data.last_name,
          id:res.data.id
        }
      })
    }).catch(err=>{
      console.log("error occured")
      console.log(err);
      localStorage.removeItem("token");
      setUserState({
        token:"",
        user:{}
      })
    })
    setFormState({
      email:"",
      password:""
    })
  }

  const handleLogout = ()=>{
    setUserState({
      token:"",
      user:{}
    })
    localStorage.removeItem("token")
  }

  return (
    <div className={classes.root}>
       <NavBar />
        <Grid container spacing={3}>
        <Grid item xs={12}>
        <img src= "./images/plant-baby-logo.png" alt="" />
        </Grid>
        </Grid>
        <h2>Log-in</h2>
          <LoginForm user={userState.user} 
        handleFormSubmit={handleFormSubmit} 
        formState={formState} 
        setFormState={setFormState} 
        handleLogout={handleLogout}
        />
    </div>
    );
}