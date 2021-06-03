import React from 'react'
import NavBar from "../NavBar";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import ImageUpload from '../ImageUpload/ImageUpload'

import PlantCard from "../PlantCard";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#fdfcfa"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://data.whicdn.com/images/303107522/original.png')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    padding: "10px",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },  
  homeContainer: {
    paddingTop: theme.spacing(3)
  },
}));

export default function Home() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <NavBar />

      <Box className={classes.hero}>
        <Box>Welcome To Plant Baby!</Box>
      </Box>
      <Container maxWidth="lg" className={classes.homeContainer}>
      <Grid container spacing={3}>
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
            </Container>
    </div>
  );
}