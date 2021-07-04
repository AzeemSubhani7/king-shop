import React from 'react';
import './SignInSignUp.scss';
import SignIn from '../../components/signIn/signIn';
import SignUp from '../../components/signup/signup';

const SignInSignUp = () => {
    return(
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInSignUp;