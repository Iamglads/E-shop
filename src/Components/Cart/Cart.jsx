import React, { Fragment } from 'react';
import { Typography, Container, Button, Grid, Toolbar  } from '@material-ui/core';
import { Link } from 'react-router-dom'
import  CartItem  from './CartItem/CartItem'

const Cart = ({ cart, updateCartQuantity, removeFromCart, removeCart }) => {
    

    console.log(cart)

    const EmptyCart = () => {
        <Typography>Votre panier est vide. 
            <Link to="/">Ajoutez des produits à votre panier!</Link>
        </Typography>
    }


    const FilledCart = () => {
        return (
            
        <Fragment>
            <Toolbar />
            <div>
                <Grid>
                    { cart.line_items.map((item) => (
                        <Grid>
                            <CartItem 
                            item={item} 
                            updateCartQuantity={ updateCartQuantity } 
                            removeFromCart={ removeFromCart }
                            />
                        </Grid>
                    ))}
                </Grid>
                <div>
                    <Typography>Sous-Total: { cart.subtotal.formatted_with_symbol } </Typography>
                    <div>
                        <Button onClick={ removeCart }>Effacer</Button>
                        <Button Link="/checkout">Paiment</Button>
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
