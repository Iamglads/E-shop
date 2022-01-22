import React from 'react';
import {Grid} from '@material-ui/core'
import  Product  from './Product/Product'
import useStyles from './styles'




const Products = ({ products, updateCart }) => {

    const classes = useStyles()

    return(
        <div className={ classes.content}>
            <Grid container justifyContent='center' spacing={4}>
                {products.map((product) =>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={ product } updateCart={updateCart}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
  
}




export default Products 
