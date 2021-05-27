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

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

import PlantCard from "../PlantCard";

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
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <img src={"http://placekitten.com/800/200"} />
      </Grid>
      <Grid item xs={12} sm={3}>
      <Button variant="outlined" size="large" color="primary" className={classes.margin}>
        Pet Friendly
      </Button>
      </Grid>
      <Grid item xs={12} sm={3}>
      <Button variant="outlined" size="large" color="primary" className={classes.margin}>
        Low Maintenance
      </Button>
      </Grid>
      <Grid item xs={12} sm={3}>
      <Button variant="outlined" size="large" color="primary" className={classes.margin}>
        Exotic
      </Button>
      </Grid>
      <Grid item xs={12} sm={3}>
      <Button variant="outlined" size="large" color="primary" className={classes.margin}>
        Restricted
      </Button>
      </Grid>
      <Grid item xs={12} sm={4}>
        <PlantCard></PlantCard>
      </Grid>
      <Grid item xs={12} sm={4}>
        <PlantCard></PlantCard>
      </Grid>
      <Grid item xs={12} sm={4}>
        <PlantCard></PlantCard>
      </Grid>
      <Grid item xs={12} sm={4}>
        <PlantCard></PlantCard>
      </Grid>
      <Grid item xs={12} sm={4}>
        <PlantCard></PlantCard>
      </Grid>
      <Grid item xs={12} sm={4}>
        <PlantCard></PlantCard>
      </Grid>
    </Grid>    
  );
}