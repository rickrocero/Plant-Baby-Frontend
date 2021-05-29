import React, {useEffect,useState} from "react";
import API from '../../utils/Api'
import NavBar from "../NavBar";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LoginForm from '../LoginForm/index'

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
  const [signupFormState,setSignupFormState] = useState({
    first_name:"",
    last_name:"",
    email:"",
    password:"",
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
            name:res.data.name
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
      console.log(res.data);
      localStorage.setItem("token",res.data.token)
      setUserState({
        ...userState,
        token:res.data.token,
        user:{
          email:res.data.email,
          name:res.data.name,
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

  const handleSignupFormSubmit = e=>{
    e.preventDefault();
    console.log(signupFormState);
    API.signup(signupFormState).then(res=>{
      console.log(res.data)
      localStorage.setItem("token",res.data.token)
      setUserState({
        ...userState,
        token:res.data.token,
        user:{
          email:res.data.email,
          name:res.data.name,
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
    setSignupFormState({
      name:"",
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
        <img src={"http://placekitten.com/800/200"} alt="" />
        </Grid>
        </Grid>
        <h2>Log-in</h2>
        <LoginForm user={userState.user} 
        handleFormSubmit={handleFormSubmit} 
        formState={formState} 
        setFormState={setFormState} 
        signupFormState={signupFormState} 
        setSignupFormState={setSignupFormState}
        handleSignupFormSubmit={handleSignupFormSubmit}
        handleLogout={handleLogout}
        />
    </div>
    );
}