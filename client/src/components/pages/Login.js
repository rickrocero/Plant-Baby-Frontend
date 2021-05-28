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

export default function ComposedTextField(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={12}>
        <img src={"http://placekitten.com/800/200"} />
        </Grid>
        </Grid>
        <h2>Log-in</h2>
         <form onSubmit = {props.handleFormSubmit}> 
         <InputLabel htmlFor="component-outlined">Email</InputLabel>
        <OutlinedInput name="email" value = {props.formState.email} onChange={(e)=>props.setFormState({...props.formState,email:e.target.value})}/>
        <InputLabel htmlFor="component-outlined">Password</InputLabel>
        <OutlinedInput name="password"  type="password" value = {props.formState.password} onChange={(e)=>props.setFormState({...props.formState,password:e.target.value})}/>
        <OutlinedInput type="submit" value="login"/>
      </form>
    </div>
    );
}