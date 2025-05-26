import { CartItem, Product } from '@/types/types'
import { createContext, PropsWithChildren, useContext, useState } from 'react'
import {randomUUID} from 'expo-crypto';

type CartType = {
  items: CartItem[],
  addItem: (product: Product, size: CartItem['size']) => void,
  updateQuantity: (itemId: string, amount: 1 | -1) => void
}

export const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {}
})

const CartProvider = ({children}: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (product: Product, size: CartItem['size']) => {
    // if already in cart, increment quantity
    const newCartItem: CartItem = {
      id: randomUUID(),
      product,
      product_id: product.id,
      size,
      quantity: 1
    }

    setItems([newCartItem, ...items])

    // console.log(items)
    // console.log(product)
  }

  const updateQuantity = (itemId: string, amount: 1 | -1) => {
    const updatedItems = items.map((item) => item.id !== itemId 
      ? item
      : {...item, quantity: item.quantity + amount}
    )
    .filter((item) => item.quantity > 0)
    // console.log(itemId, amount)
    setItems(updatedItems)
    console.log(updatedItems)
  }

  return (
    <CartContext.Provider value={{items, addItem, updateQuantity}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)


export default CartProvider;