import { View, Text, Image, StyleSheet } from 'react-native'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@assets/data/products'
import { defaultPizza } from '@/components/ProductListItem'

export default function ProductDetails() {
  const {id} = useLocalSearchParams()
  const product = products.find((productItem) => productItem.id.toString() === id)
  // console.log(product)
  if(!product) {
    return <Text>Product not found</Text>
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