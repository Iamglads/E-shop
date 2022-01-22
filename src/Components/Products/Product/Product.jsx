import React, { Fragment } from 'react'
import { Typography } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import './Product.css'



const Product = ( { product, updateCart }) => {   
    //console.log(product)
    return (
        <Fragment>
            <div className="container__product">
                <div className='product-image'>
                    <img className="media" src={ product.image.url} alt={ product.name}/>
                </div>
                <div className="product-content">
                    <h3>{ product.name }</h3>
                    <h4>{ product.price.formatted_with_symbol }</h4>
                    <button className='btn-see-cart' onClick={() => updateCart(product.id, 1)}>
                        Voir le produit
                    </button>
                </div>
            </div>
        </Fragment>
    )
}
 
export default Product