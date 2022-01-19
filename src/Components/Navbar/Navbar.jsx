import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Navbar = (props) => {

    const location = useLocation()
    return (
        <div>
            <AppBar position='fixed' color='inherit'>
                <Toolbar>
                    <Typography variant='h1'>
                        E-shop
                    </Typography>
                    <div>
                        <Link to="/cart"></Link>
                        { location.pathname === '/' ? (
                            <IconButton component={Link} to="/cart" aria-label="Afficher le panier">
                                <Badge badgeContent={props.totalItems}>
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>) : null
                        }
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
