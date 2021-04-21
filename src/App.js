import React from 'react';
import BallStore from './components/BallStore';
import { BallProvider } from './components/BallContext';
import { CartProvider } from './components/CartContext';
import Nav from './components/Nav';
import Cart from './components/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <BallProvider>
      <CartProvider>
        <Router>
          <div>
            <Nav/>
              <Switch>
                <Route exact path="/" component={BallStore}/>
                <Route path="/cart" component={Cart}/>
              </Switch>
          </div>
        </Router>
      </CartProvider>
    </BallProvider>
  );
}

export default App;


