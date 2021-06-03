import React, { useEffect, useState } from "react";
import API from "../../utils/Api";
import NavBar from "../NavBar";
import SignupForm from "../SignupForm/index";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    backgroundColor: "#fdfcfa"
  },
}));

export default function ComposedTextField(props) {
  const history = useHistory();
  const classes = useStyles();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [signupFormState, setSignupFormState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [userState, setUserState] = useState({
    token: "",
    user: {},
  });

  const handleOnClick = () => {
    history.push("/home");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      API.getUser(token)
        .then((res) => {
          console.log(res.data);
          console.log('token: ', token)
          setUserState({
            token: token,
            user: {
              email: res.data.email,
              first_name: res.data.first_name,
              last_name: res.data.last_name,
              id: res.data.id,
            },
          });
        })
        .catch((err) => {
          console.log("no logged in user");
          setUserState({
            token: "",
            user: {},
          });
        });
    } else {
      console.log("no token provided");
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    API.login(formState)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        console.log('token: ', res.data.token)
        setUserState({
          ...userState,
          token: res.data.token,
          user: {
            email: res.data.email,
            name: res.data.name,
            id: res.data.id,
          },
        });
      })
      .catch((err) => {
        console.log("error occured");
        console.log(err);
        localStorage.removeItem("token");
        setUserState({
          token: "",
          user: {},
        });
      });
    setFormState({
      email: "",
      password: "",
    });
  };

  const handleSignupFormSubmit = (e) => {
    e.preventDefault();
    console.log(signupFormState);
    API.signup(signupFormState)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        setUserState({
          ...userState,
          token: res.data.token,
          user: {
            email: res.data.email,
            first_name: res.data.first_name,
            last_name: res.data.last_name,
            id: res.data.id,
          },
        });
      }, handleOnClick())
      .catch((err) => {
        console.log("error occured", err);
        localStorage.removeItem("token");
        setUserState({
          token: "",
          user: {},
        });
      });
    setSignupFormState({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleLogout = () => {
    setUserState({
      token: "",
      user: {},
    });
    localStorage.removeItem("token");
  };

  return (
    <div className={classes.root}>
      <NavBar />
      <Grid container 
        spacing={3}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <img src="./images/plant-baby-logo.png" alt=""/>
        </Grid>

      <h2>Sign-up</h2>
      <SignupForm
        user={userState.user}
        handleFormSubmit={handleFormSubmit}
        formState={formState}
        setFormState={setFormState}
        signupFormState={signupFormState}
        setSignupFormState={setSignupFormState}
        handleSignupFormSubmit={handleSignupFormSubmit}
        handleLogout={handleLogout}
      />
      </Grid>  
    </div>
  );
}
