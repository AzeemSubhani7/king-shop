// Libraries
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import HomePage from './pages/homepage/homepage';
// Styling
import './App.css'

const HatsPage = () => {
  return(
    <div>
      <h1>Hats Page</h1>
    </div>
  );
}

const ShopPage = () => {
  return(
    <div>
      <h1>Shop Page</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} /> 
          <Route path='/hats' component={HatsPage} /> 
          <Route path='/shop' component={ShopPage} /> 
        </Switch> 
      </div>
    </BrowserRouter>
  );
}

export default App;
