import React from 'react';
import { IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Hero from '../Hero/Hero';
import './Navbar.css'

import Menu from './Menu/Menu'

const Navbar = (props) => {

    const location = useLocation()
    return (
        <div>
            <div className="container__navbar" position='fixed' color='inherit'>
                <div className='wrappe__navbar'>
                    <div className='logo'>
                        <h1>E-shop</h1>
                    </div>
                    <Menu />
                    <div>
                        <Link to="/cart"></Link>
                        { location.pathname === '/' ? (
                            <IconButton component={Link} to="/cart" aria-label="Afficher le panier">
                                <Badge badgeContent={props.totalItems}>
                                    <p>Panier</p>
                                </Badge>
                            </IconButton>) : null
                        }
                    </div>
                </div>
            </div>
            <Hero />
        </div>
    );
}

export default Navbar;
