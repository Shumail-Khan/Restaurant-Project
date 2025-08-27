import React, { createContext, useEffect, useState } from 'react'
import { food_list } from '../assets/assets'
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            // If quantity is 1 or less, remove the item entirely from cart
            if ((prev[itemId] || 0) <= 1) {
                const newCart = { ...prev }
                delete newCart[itemId]
                return newCart
            } else {
                // Otherwise decrement the quantity
                return {
                    ...prev,
                    [itemId]: prev[itemId] - 1
                }
            }
        })
    }

    // Clear cart function (optional)
    const clearCart = () => {
        setCartItems({})
    }

    useEffect(() => {
        console.log("Cart Items:", cartItems)
    }, [cartItems])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        clearCart
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider