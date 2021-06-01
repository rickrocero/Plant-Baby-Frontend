import React from 'react'
import NavBar from "../NavBar";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PlantCard from "../PlantCard";
import CheckoutForm from '../CheckoutForm/index'

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
    <div>
      <Grid container spacing={3}>
        <NavBar />
        <Grid item xs={12}>
          <img src={"http://placekitten.com/800/200"} alt="" />
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
      <CheckoutForm />
    </div>
  );
}