import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from './CartContext';

function Nav() {
  //const [cart] = useContext(CartContext);
  const [cartItems] = useContext(CartContext);

  return (
    <nav>
        <ul>
            <Link to="/">
              <li>BallStore</li>
            </Link>
            <Link to="cart">
                <li>Cart ({cartItems.length})</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;