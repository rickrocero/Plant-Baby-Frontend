import React from 'react';
// import {Link} from "react-router-dom";
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_peperomia-obtusfolia-green_variant_small_grant_black_72353c54-6669-40d7-be32-8a9dd009e984_1200x.jpg?v=1622115419"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Plant
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This is a plant. Plants have leaves. Leaves are nice. It also has flowers, which smell good. And elves, it has elves living in it. You don't mind tiny little elves, do you?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}