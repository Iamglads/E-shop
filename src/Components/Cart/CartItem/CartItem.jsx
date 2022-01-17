
   
import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';



const CartItem = ({ item }) => {

  return (
    <Card>
      <CardMedia image={item.image.url} alt={item.name}  />
      <CardContent>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions>
        <div>
          <Button type="button" size="small">-</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" >+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary">Supprimer</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;