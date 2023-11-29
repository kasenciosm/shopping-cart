import { createContext, useState } from "react";


export const CartContext = createContext()

export function CartProvider({ children }) {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

    const orderNumber = parseInt(Math.random().toString(10).substr(2, 8));
    localStorage.setItem('order_number', orderNumber)


    const addToCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            newCart[productInCartIndex].priceProduct = newCart[productInCartIndex].quantity * newCart[productInCartIndex].price
            return setCart(newCart)
        }

        const { quantity, price } = product

        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1,
                priceProduct: quantity * price
            }
        ]))
    }

    const subtractCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if (productInCartIndex >= 0 && product.quantity > 1) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity -= 1
            return setCart(newCart)
        } else {

        }
    }

    const removeFromCart = product => {
        setCart(prevState => prevState.filter(item => item.id !== product.id) || localStorage.removeItem('cart'))
    }


    const clearCart = () => {
        localStorage.removeItem('cart')
        return setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            subtractCart,
            removeFromCart,
            clearCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}