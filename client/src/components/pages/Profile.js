import React from 'react'
import NavBar from "../NavBar";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ComposedTextField() {
  const [name, setName] = React.useState('Composed TextField');
  const classes = useStyles();

  const handleChange = (event) => {
    setName(event.target.value);
  };


  return (
    <div className={classes.root}>
       <NavBar />
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <img src={"http://placekitten.com/800/200"} alt="" />
            </Grid>
            <Grid item xs={6}>
                <p>First Name: </p>
            </Grid>
            <Grid item xs={6}>
                <p>Last Name: </p>
            </Grid>
            <Grid item xs={12}>
                <p>Username: </p>
            </Grid>
            <Grid item xs={12}>
                <p>Email: </p>
            </Grid>
            <Grid item xs={12}>
                <p>Password: </p>
            </Grid>
        </Grid>
    </div>
    );
}