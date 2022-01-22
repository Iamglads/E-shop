
import React, { Fragment } from 'react';
import '../Cart.css'


const CartItem = ({ item, removeFromCart, updateCartQuantity }) => {

  return (
		<Fragment>
			<div className='container__product--cart'>
				<div className='product-cart-image'>
					<img src={item.image.url} alt={item.name}/>
				</div>
				<div className='card__content'>
					<h3>{item.name}</h3>
					<h4>{item.line_total.formatted_with_symbol}</h4>
				</div>
				<div className='btns-quantity'>
					<button onClick={() => updateCartQuantity(item.id, item.quantity - 1)} type="button" size="small">-</button>
					<h4>{item.quantity}</h4>
					<button onClick={() => updateCartQuantity(item.id, item.quantity + 1)} type="button" size="small" >+</button>
				</div>
				<button onClick={ removeFromCart(item.id) } variant="contained" type="button" color="secondary">
					Supprimer
				</button>
			</div>
		</Fragment>
  );
};

export default CartItem;