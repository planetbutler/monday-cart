import React, { useState, createContext } from 'react'

export const BallContext = createContext();

export const BallProvider = props => {
    const [balls, setBalls] = useState([
        {id: 1, type: 'football', color: 'brown', price: 22, qty: ''},
        {id: 2, type: 'pingpong', color: 'white', price: 1, qty: ''},
        {id: 3, type: 'baseball', color: 'white', price: 7, qty: ''},
        {id: 4, type: 'basketball', color: 'orange', price: 19, qty: ''}
    ])

    return (
        <BallContext.Provider value={[balls, setBalls]}>
            {props.children}
        </BallContext.Provider>
    )
};


