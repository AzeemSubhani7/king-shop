import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.util' 
import './header.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
const Header = ({ currentUser }) => {
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
            </div>
        </div>
    )
}

export default Header;