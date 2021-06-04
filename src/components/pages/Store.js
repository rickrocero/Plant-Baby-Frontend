import React, { useEffect } from 'react'
import NavBar from "../NavBar";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import PlantCard from "../PlantCard";
import Link from '@material-ui/core/Link';
import CheckoutForm from '../CheckoutForm/index'
import ForSalePlantCard from '../ForSalePlantCard/index'
import API from '../../utils/Api'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdfcfa"
  },


  margin: {
    backgroundColor: "#006a4e",
    color: "#e1c0ad"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.technogym.com/wpress/wp-content/uploads/2019/04/indoor-plants-header.jpg')`,
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
  shopContainer: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }

}));

export default function ComposedTextField() {
  const [name, setName] = React.useState('Composed TextField');
  const classes = useStyles();

  const handleChange = (event) => {
    setName(event.target.value);
  };


  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log("token: ", token)
    API.getAllPlants(token)
      .then((res) => {
        console.log(res)

      }).catch((err) => {
        console.log('error: ', err)
      })
  }, []);


  return (

    <div className={classes.root}>
      <NavBar />

      <Box className={classes.hero}>
        <Box>Shop</Box>
      </Box>

      <Container maxWidth="lg" className={classes.shopContainer}>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Button variant="outlined" size="large" color="#d0f0c0" className={classes.margin}>
              Pet Friendly
          </Button>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button variant="outlined" size="large" color="#d0f0c0" className={classes.margin}>
              Low Maintenance
            </Button>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button variant="outlined" size="large" color="#d0f0c0" className={classes.margin}>
              Exotic
          </Button>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button variant="outlined" size="large" color="#d0f0c0" className={classes.margin}>
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
        <Grid item xs={12} sm={4}>
          <ForSalePlantCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ForSalePlantCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ForSalePlantCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ForSalePlantCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ForSalePlantCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ForSalePlantCard />
        </Grid>


            </Container>
    </div >
  );
}