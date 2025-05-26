import { useCartProvider } from '@/providers/CartProvider'
import { StatusBar } from 'expo-status-bar'
import { View, Text, Platform } from 'react-native'

export default function CartScreen() {
  const {items} = useCartProvider()
  return (
    <View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

      <Text>cart items length? {items.length}</Text>
    </View>
  )
}