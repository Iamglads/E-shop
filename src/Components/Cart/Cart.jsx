import React, { Fragment } from 'react';
import { Typography, Container, Button, Grid, Toolbar  } from '@material-ui/core';
import { Link } from 'react-router-dom'
import  CartItem  from './CartItem/CartItem'
import './Cart.css'


const Cart = ({ cart, updateCartQuantity, removeFromCart, removeCart }) => {

const EmptyCart = () => {
    return (
        <>
        <div className='empty__cart'>
            <Toolbar />
                <Typography>Votre panier est vide. <Link to="/">Ajoutez des produits à votre panier!</Link>
                </Typography>
            </div>
        </>
    
    )
}

const FilledCart = () => {
    return (   
    <Fragment>
        <div>
            <Grid>
                { cart.line_items.map((item) => (
                    <Grid>
                        <CartItem 
                        item={item} 
                        updateCartQuantity={ () => updateCartQuantity } 
                        removeFromCart={ () => removeFromCart }
                        />
                    </Grid>
                ))}
            </Grid>
            <div>
                <Typography>Sous-Total: { cart.subtotal.formatted_with_symbol } </Typography>
                <div>
                    <Button onClick={() => removeCart }>Effacer</Button>
                    <Button component={ Link } to="/checkout">Paiment</Button>
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
