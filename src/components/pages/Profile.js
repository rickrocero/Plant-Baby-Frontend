import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/Api";
import PlantCard from "../PlantCard/index";
import ProfilePlantCard from "../ProfilePlantCard/index"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdfcfa"
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
  }
}));

export default function Profile() {
  const classes = useStyles();

  const [userState, setUserState] = useState({
    token: "",
    user: {},
  });

  const [inventoryState, setInventoryState] = useState({
    inventory: "",
  });

  const [plantState, setPlantState] = useState({
    type: "",
    image_file: "",
    price: "",
    description: "",
    quantity: "",
    is_indoor: "",
    for_sale: "",
    inventory_id: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token: ", token);
    if (token) {
      API.getUser(token).then((res) => {
        console.log(res.data);
        const profileData = res.data;
        setUserState({
          token: token,
          user: {
            email: profileData.email,
            id: profileData.id,
            first_name: profileData.first_name,
            last_name: profileData.last_name,
          },
        });
      })
      
        .catch((err) => {
          console.log("no user token");
          // setUserState({
          //   token: "",
          //   user: {},
          // });
        });
    } else {
      console.log("no token provided");
    }
  }, []);


  const plantInventory = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const id = userState.user.id;
      console.log(userState.user.id);
      API.getInventory(id, token)
        .then((response) => {
          console.log(response);
          setInventoryState({
            inventory: response.data.inventory.id,
          });
        })
    const inventId = inventoryState.inventory;
    console.log(inventoryState);
    API.getPlantInventory(inventId, token).then((results) => {
      const plants = results.data.plants;
      console.log(plants);
      for (let i = 0; i < plants.length; i++) {
        const plantData = plants[i];
        console.log(plantData);
        setPlantState({
          type: plantData.type,
          image_file: plantData.image_file,
          price: "",
          description: plantData.description,
          quantity: "",
          is_indoor: "",
          for_sale: "",
          inventory_id: inventoryState.inventory,
        });
      }
    });
  };

  return (
    <div className={classes.root}>
      <NavBar />

      <Box className={classes.hero}>
        <Box>Profile</Box>
      </Box>

      <Grid container spacing={3}>




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

      <button onClick={plantInventory}>See your Plant Inventory</button>
      <ProfilePlantCard
        plantName={plantState.type}
        wikiDescription={plantState.description}
        originalImage={plantState.image_file}
      />

    </div>
  );
}
