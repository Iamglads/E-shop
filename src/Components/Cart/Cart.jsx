import React, { Fragment } from 'react';
import { Typography, Container, Button, Grid, Toolbar  } from '@material-ui/core';
import  CartItem  from './CartItem/CartItem'

const Cart = ({ cart }) => {
    

    console.log(cart)

    const EmptyCart = () => {
        <Typography>Votre panier est vide</Typography>
    }


    const FilledCart = () => {
        return (
            
        <Fragment>
            <Toolbar />
            <div>
                <Grid>
                    { cart.line_items.map((item) => (
                        <Grid>
                            <CartItem item={item}/>
                        </Grid>
                    ))}
                </Grid>
                <div>
                    <Typography>Sous-Total: { cart.subtotal.formatted_with_symbol } </Typography>
                    <div>
                        <Button>Effacer</Button>
                        <Button>Paiment</Button>
                    </div>
                </div>
            </div>
        </Fragment>
        )
    }

    if(!cart.line_items) return 'Chargement...'

    return (
        <Container>
            <Typography>Votre panier</Typography>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    );
}

export default Cart;
