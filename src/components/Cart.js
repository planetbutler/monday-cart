import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export const Cart = ({id, type, price, qty}) => {
    const [cartItems, setCartItems] = useContext(CartContext);
    
    const addToCart = (ball) => {
        const inCart = cartItems.find((item) => item.id === ball.id);

        if (inCart) {
            setCartItems(
                cartItems.map((item) =>
                item.id === ball.id ? {...inCart, qty: inCart.qty + 1} : item)
            );
        } else {
            setCartItems([...cartItems, {...ball, qty: 1}]);
        }
    }

    return (
        <div>
            {cartItems.map((item) => (
                <div key={item.id}>
                    <h3>type={item.type}</h3>,
                    <h4>price={item.price}</h4>,
                    <h4>qty={item.qty}</h4>
                    <h4>id={item.id}</h4>
                    <button onClick={() => addToCart(item)}>+</button>
                </div>
            ))}
        </div>
    )
};

export default Cart;
