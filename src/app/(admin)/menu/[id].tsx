import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import products from '@assets/data/products'
import { defaultPizza } from '@/components/ProductListItem'
import { useState } from 'react'
import Button from '@/components/Button'
import { useCart } from '@/providers/CartProvider'
import { PizzaSize } from '@/types/types'

const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL']

export default function ProductDetails() {
  const {id} = useLocalSearchParams()
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('M')
  const router = useRouter();
  const product = products.find((productItem) => productItem.id.toString() === id)
  const {addItem} = useCart()
  // console.log(product)
  if(!product) {
    return <Text>Product not found</Text>
  }

  const addToCart = () => {
    if(!product) {
      return
    }
  
    addItem(product, selectedSize)
    router.push('/cart');
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: product.name}} />

      <Image source={{uri: product.image || defaultPizza}} style={styles.image} />

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>RM {product.price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    gap: 10
  },
  image: {
    width: '100%',
    aspectRatio: 1/1
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    // backgroundColor: 'red',
    // marginTop: 'auto'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})