import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux' // It is a higher order component

import { auth } from '../../firebase/firebase.util' 
import CartIcon from '../carticon/cartIcon'
import CartDropdown from '../cartdropdown/cartDropdown'
import './header.scss'

import { ReactComponent as Logo } from '../../assets/crown.svg'
const Header = ({ currentUser, hidden }) => {
    return(
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop' >
                    SHOP
                </Link>
                <Link className='option' to='shop'>
                    CONTACT
                </Link>
                {
                    currentUser
                    ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link to='/signin' ><div className='option' >SIGN IN</div></Link>
                }
                <CartIcon />
            </div>
            { hidden ? null : <CartDropdown /> }
        </div>
    )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
    return {
        currentUser,
        hidden
    }
}

export default  connect(mapStateToProps)(Header);