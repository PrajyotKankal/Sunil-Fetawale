'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('inquiryCart')
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart))
            } catch (e) {
                console.error('Failed to parse cart', e)
            }
        }
    }, [])

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('inquiryCart', JSON.stringify(cart))
    }, [cart])

    const addToCart = (product) => {
        setCart(prev => {
            // Check if already in cart
            if (prev.find(item => item._id === product._id)) {
                setIsOpen(true) // Open cart if already added
                return prev
            }
            // Add new item
            const newItem = {
                _id: product._id,
                title: product.title,
                code: product.code,
                image: product.images?.[0]?.url,
                slug: product.slug
            }
            // setIsOpen(true) // Don't auto-open, let user decide
            return [...prev, newItem]
        })
    }

    const removeFromCart = (productId) => {
        setCart(prev => prev.filter(item => item._id !== productId))
    }

    const clearCart = () => {
        setCart([])
    }

    const toggleCart = () => setIsOpen(prev => !prev)

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            isOpen,
            setIsOpen,
            toggleCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}
