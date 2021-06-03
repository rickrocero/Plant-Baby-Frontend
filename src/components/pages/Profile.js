import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/Api";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Profile() {
  // const [name, setName] = React.useState('Composed TextField');
  const classes = useStyles();

  // const handleChange = (event) => {
  //   setName(event.target.value);
  // };
  const [userState, setUserState] = useState({
    token: "",
    user: {},
  });

  //once authenticated pull the user data to populate the fields on the profile page
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      API.getUser(token)
        .then((res) => {
          console.log(res.data);
          setUserState({
            token: token,
            user: {
              email: res.data.email,
              id: res.data.id,
              first_name: res.data.first_name,
              last_name: res.data.last_name,
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

  return (
    <div className={classes.root}>
      <NavBar />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <img src={"http://placekitten.com/800/200"} alt="" />
        </Grid>

        <Grid item xs={6}>
          <p>First Name: {userState.user.first_name} </p>
        </Grid>
        <Grid item xs={6}>
          <p>Last Name: {userState.user.last_name} </p>
        </Grid>
        {/* <Grid item xs={12}>
          <p>Username: </p>
        </Grid> */}
        <Grid item xs={12}>
          <p>Email: {userState.user.email} </p>
        </Grid>
        {/* <Grid item xs={12}>
          <p>Password: </p>
        </Grid> */}
      </Grid>
      {/* <div>
        {renderProfile()}
        </div> */}
    </div>
  );
}
