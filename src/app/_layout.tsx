import React from 'react'
import { Stack } from 'expo-router'
import CartProvider from '@/providers/CartProvider'

export default function AppRootLayout() {
  return (
    <CartProvider>
      <Stack>
        <Stack.Screen name='cart' options={{presentation: 'modal'}}/>
        <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
      </Stack>
    </CartProvider>
  )
}