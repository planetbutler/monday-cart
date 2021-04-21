import React, { useContext } from 'react';
import Ball from './Ball';
import { BallContext } from './BallContext';

const BallStore = () => {
    const [balls] = useContext(BallContext)

    return (
        <div>
            {balls.map((ball) => (
                <div key={ball.id}>
                    <Ball
                    type={ball.type}
                    color={ball.color}
                    price={ball.price}
                    qty={ball.qty}
                    id={ball.id}/>
                </div>
            ))}
        </div>
    )
}

export default BallStore;



  