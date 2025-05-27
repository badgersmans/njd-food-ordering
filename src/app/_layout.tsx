import React from 'react'
import { Stack } from 'expo-router'
import CartProvider from '@/providers/CartProvider'

export default function AppRootLayout() {
  return (
    <CartProvider>
      <Stack>
        <Stack.Screen name='cart' options={{presentation: 'modal', title: 'Your Cart'}}/>
        <Stack.Screen name='(user)' options={{headerShown: false}}/>
        <Stack.Screen name='(admin)' options={{headerShown: false}}/>
      </Stack>
    </CartProvider>
  )
}