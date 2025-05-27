import Button from '@/components/Button'
import CartListItem from '@/components/CartListItem'
import { useCart } from '@/providers/CartProvider'
import { StatusBar } from 'expo-status-bar'
import { View, Text, Platform, FlatList, StyleSheet } from 'react-native'

export default function CartScreen() {
  const {items, total} = useCart()
  return (
    <View style={{padding: 10}}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

      <FlatList 
        data={items}
        renderItem={({item}) => (
          <CartListItem cartItem={item}/>
        )}
        contentContainerStyle={{ gap: 10}}
      />
      <Text style={styles.priceText}>Total: RM {total}</Text>
      <Button text='Checkout'/>
    </View>
  )
}

const styles = StyleSheet.create({
  priceText: {
    marginTop: 15,
    fontSize: 19,
    fontWeight: '500'
  }
})