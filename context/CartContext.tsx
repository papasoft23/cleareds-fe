'use client'
import { createContext, useContext, useState } from 'react'

type CartItem = {
    sku: string
    name: string
    qty: number
}

type CartContextType = {
    items: CartItem[]
    addItem: (item: CartItem) => void
    removeItem: (sku: string) => void
    clear: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([])

    const addItem = (item: CartItem) => {
        setItems(prev => {
            const existing = prev.find(i => i.sku === item.sku)
            return existing
                ? prev.map(i => i.sku === item.sku ? { ...i, qty: i.qty + item.qty } : i)
                : [...prev, item]
        })
    }

    const removeItem = (sku: string) => {
        setItems(prev => prev.filter(i => i.sku !== sku))
    }

    const clear = () => setItems([])

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const ctx = useContext(CartContext)
    if (!ctx) throw new Error('useCart must be used inside CartProvider')
    return ctx
}
