import { useCart } from '@/providers/CartProvider'
import { StatusBar } from 'expo-status-bar'
import { View, Text, Platform } from 'react-native'

export default function CartScreen() {
  const {items} = useCart()
  return (
    <View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

      <Text>cart items length? {items.length}</Text>
    </View>
  )
}