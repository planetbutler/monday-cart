import React, { useContext } from 'react'
import { CartContext } from './CartContext';

const Ball = ({type, color, price, id, qty}) => {
    const [cartItems, setCartItems] = useContext(CartContext)
    
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
            <h3>Type: {type}</h3>
            <h5>Color: {color}</h5>
            <h5>Price: {price}</h5>
            <h5>Id: {id}</h5>
            <h5>{qty}</h5>
            <button onClick={addToCart}>Add</button>
        </div>
    )
}

export default Ball;


