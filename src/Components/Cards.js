import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import IndeterminateCheckBoxTwoToneIcon from "@material-ui/icons/IndeterminateCheckBoxTwoTone";

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
  },
});

function Cards({ product, index, onAdd, onSub, ondelete }) {
  const classes = useStyles();

  return (
    <div className='cart'>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component='img'
            alt='Contemplative Reptile'
            height='80'
            width='20'
            image={product.image}
            title='Contemplative Reptile'
          />

          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {product.Name}
            </Typography>
          </CardContent>
          <p>{product.count <= 0 ? "zero" : product.count}</p>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => onAdd(index)}
            variant='contained'
            color='primary'
          >
            <AddCircleOutlineIcon />
          </Button>
          <Button
            onClick={() => onSub(index)}
            variant='contained'
            color='primary'
          >
            <IndeterminateCheckBoxTwoToneIcon />
          </Button>
          <Button
            onClick={() => ondelete(index)}
            variant='contained'
            color='secondary'
          >
            <DeleteIcon />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Cards;
