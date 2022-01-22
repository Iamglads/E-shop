import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
    return (
        <Fragment>
            <div className='container__menu'>
                <Link className='nav-link' to="/">Accueil</Link>
                <Link className='nav-link' to="/about">A Propos</Link>
                <Link className='nav-link' to="/contact">Contact</Link>
            </div>
        </Fragment>
    );
}

export default Menu;
