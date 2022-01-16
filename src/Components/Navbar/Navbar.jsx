import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

const Navbar = () => {
    return (
        <div>
            <AppBar position='fixed' color='inherit'>
                <Toolbar>
                    <Typography variant='h1'>
                        E-shop
                    </Typography>
                    <div>
                        <IconButton aria-label="Afficher le panier">
                            <Badge badgeContent={2}>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
