import React from 'react';
import './App.css';
import {HomePage} from './pages/homepage/homepage.component.jsx';
import { Switch, Route, Link } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';

function App() {
  return (
    
    <div>
      <Header/>
      <Switch>
        <Route exact path= '/' component={HomePage}/>
        <Route path= '/shop' component={ShopPage}/>
        <Route path= '/signIn' component={SignInAndSignUp}/>
        </Switch>
    </div>
  );  
}

export default App;
