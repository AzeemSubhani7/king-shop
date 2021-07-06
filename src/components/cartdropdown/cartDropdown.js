import React from 'react'

import Button from '../button/button'

import './cartDropdown.scss'

const CartDropdown = () => {
    return(
        <div className='cart-dropdown'>
            <div className='cart=item'></div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;