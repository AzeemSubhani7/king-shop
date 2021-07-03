// Libraries
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Pages
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shoppage/shoppage';
// Styling
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} /> 
          <Route path='/shop' component={ShopPage} /> 
        </Switch> 
      </div>
    </BrowserRouter>
  );
}

export default App;
