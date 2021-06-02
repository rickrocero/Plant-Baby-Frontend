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
    backgroundColor: "#fdfcfa"
  },

  storeimg: {
    alignItems: "center",
    justifyContent: "center"
  },

  margin: {
    backgroundColor:"#006a4e",
    color: "#e1c0ad"
  }
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
          <img src={"https://static.wixstatic.com/media/be01c3_617ff8ef453c4395a76ac6d87b2af9a1~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_90,usm_0.66_1.00_0.01/be01c3_617ff8ef453c4395a76ac6d87b2af9a1~mv2.jpg"} className={classes.storeimg} alt="plants on a shelf"/>
        </Grid>
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
      <CheckoutForm />
    </div>
  );
}