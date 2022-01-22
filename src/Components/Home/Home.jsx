import React from 'react';
import Hero from '../Hero/Hero';
import  Products from '../Products/Products';

const Home = ({ products, updateCart}) => {
    return (
        <div>
            <Products products={products} updateCart={updateCart} />
        </div>
    );
}

export default Home;
