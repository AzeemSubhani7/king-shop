import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg.svg'
import { connect } from 'react-redux'
import { toggleCartHideen } from '../../redux/cart/cartAction'

import './cartIcon.scss'

const CartIcon = ({ toggleCartHideen }) => {
    return(
        <div className='cart-icon' onClick={toggleCartHideen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHideen: () => dispatch(toggleCartHideen())
    }
}

export default connect(null, mapDispatchToProps)(CartIcon);