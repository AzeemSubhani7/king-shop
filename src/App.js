// Libraries
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { auth } from './firebase/firebase.util';
// Pages
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shoppage/shoppage';
import Header from './components/header/header';
import SignInSignUp from './pages/signin-signup/SignInSignUp';
// Styling
import './App.css'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render(){
    return(
      <BrowserRouter>
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} /> 
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp} />

        </Switch> 
      </div>
    </BrowserRouter>
    )
  }
}

export default App;
