import React from 'react'
import ReactDOM from 'react-dom'
// // import './index.css'

import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
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
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <img src={"http://placekitten.com/800/200"} />
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