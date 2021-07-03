// Libraries
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Pages
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shoppage/shoppage';
import Header from './components/header/header';
import SignInSignUp from './pages/signin-signup/SignInSignUp';
// Styling
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} /> 
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp} />

        </Switch> 
      </div>
    </BrowserRouter>
  );
}

export default App;
