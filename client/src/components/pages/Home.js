import React from 'react'
import NavBar from "../NavBar";
import ImageUpload from '../ImageUpload/ImageUpload'

import PlantCard from "../PlantCard";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
    const classes = useStyles();
  
    return (
      
      <div className={classes.root}>
         <NavBar />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <img src={"http://placekitten.com/800/600"} alt="" />
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
        <ImageUpload />
      </div>
    );
  }