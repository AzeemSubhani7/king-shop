import React from 'react';

import FormInput from '../forminput/formInput';
import CustomButton from '../button/button';
import './signIn.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handerSubmit = (e) => {
        e.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handerSubmit}>
                    <FormInput 
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label='Email'
                    required />
                    
                    <FormInput 
                    name='password' 
                    type='password'
                    label='Password' 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    required />
                    

                    <CustomButton type='submit'> Sign In </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;