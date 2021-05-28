import React from 'react'
import ReactDOM from 'react-dom'
// // import './index.css'

// import ImageUpload from "../ImageUpload";

import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import {Cloudinary} from 'cloudinary-core';
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';

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
  const [value, setValue] = React.useState('default');
  const classes = useStyles();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className={classes.root}>
        {/* <Grid container spacing={3}>
            <ImageUpload></ImageUpload>
        </Grid> */}
        <Grid container spacing={3}>
        <Grid item xs={12}>
        <img src={"http://placekitten.com/800/200"} />
        </Grid>
        <Grid item xs={12}>
            <FormControl variant="outlined">
                <InputLabel htmlFor="component-outlined">Plant Name</InputLabel>
                <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
            </FormControl>
        </Grid>
        <Grid item xs={12}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Pick all that apply</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox onChange={handleChange} name="pets" />}
                            label="Pet Friendly"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange={handleChange} name="easycare" />}
                            label="Low Maintenance"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange={handleChange} name="exotic" />}
                            label="Exotic"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange={handleChange} name="restricted" />}
                            label="Shipping Restrictions May Apply"
                        />
                    </FormGroup>
            </FormControl>
        </Grid>
        <Grid item xs={12}>
        <FormControl component="fieldset">
            <FormLabel component="legend">Flowers</FormLabel>
                <RadioGroup aria-label="flowers" name="flowers1" value={value} onChange={handleChange}>
                    <FormControlLabel control={<Radio />} label="Yes" />
                    <FormControlLabel value="default" control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>
        </Grid>
        <Grid item xs={12}>
        <FormControl component="fieldset">
            <FormLabel component="legend">Water</FormLabel>
                <RadioGroup aria-label="water" name="water1" value={value} onChange={handleChange}>
                    <FormControlLabel control={<Radio />} label="Daily" />
                    <FormControlLabel value="default" control={<Radio />} label="1-2 times a week" />
                    <FormControlLabel control={<Radio />} label="Once a month" />
                    <FormControlLabel control={<Radio />} label="Air plant" />
                </RadioGroup>
            </FormControl>
        </Grid>
        <Grid item xs={12}>
        <FormControl component="fieldset">
            <FormLabel component="legend">Sunlight</FormLabel>
                <RadioGroup aria-label="sunlight" name="sunlight1" value={value} onChange={handleChange}>
                    <FormControlLabel value="default" control={<Radio />} label="Direct Sunlight" />
                    <FormControlLabel control={<Radio />} label="Indirect Sunlight" />
                </RadioGroup>
            </FormControl>
        </Grid>
        <Grid item xs={12}>
        <FormControl component="fieldset">
            <FormLabel component="legend">Sunlight</FormLabel>
                <RadioGroup aria-label="ferilize" name="fertilize1" value={value} onChange={handleChange}>
                    <FormControlLabel control={<Radio />} label="Regularly" />
                    <FormControlLabel value="default" control={<Radio />} label="Periodically" />
                    <FormControlLabel control={<Radio />} label="Rarely" />
                </RadioGroup>
            </FormControl>
        </Grid>
        <Grid item xs={12}>
        <FormControl component="fieldset">
            <FormLabel component="legend">Sunlight</FormLabel>
                <RadioGroup aria-label="temperature" name="temperature1" value={value} onChange={handleChange}>
                    <FormControlLabel control={<Radio />} label="Hot" />
                    <FormControlLabel value="default" control={<Radio />} label="Temperate" />
                    <FormControlLabel control={<Radio />} label="Cool" />
                </RadioGroup>
            </FormControl>
        </Grid>
        <Grid item xs={12}>
            <FormControl variant="outlined">
                <InputLabel htmlFor="component-outlined">Added Instructions</InputLabel>
                <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Instructions" />
            </FormControl>
        </Grid>
        </Grid>
    </div>
    );
}