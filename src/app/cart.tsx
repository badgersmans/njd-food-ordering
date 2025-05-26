import CartListItem from '@/components/CartListItem'
import { useCart } from '@/providers/CartProvider'
import { StatusBar } from 'expo-status-bar'
import { View, Text, Platform, FlatList } from 'react-native'

export default function CartScreen() {
  const {items} = useCart()
  return (
    <View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

      <FlatList 
        data={items}
        renderItem={({item}) => (
          <CartListItem cartItem={item}/>
        )}
        contentContainerStyle={{ padding: 8, gap: 10}}
      
      />
    </View>
  )
}