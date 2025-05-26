import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@assets/data/products'
import { defaultPizza } from '@/components/ProductListItem'
import { useState } from 'react'
import Button from '@/components/Button'

const sizes = ['S', 'M', 'L', 'XL']

export default function ProductDetails() {
  const {id} = useLocalSearchParams()
  const [selectedSize, setSelectedSize] = useState('M')
  const product = products.find((productItem) => productItem.id.toString() === id)
  // console.log(product)
  if(!product) {
    return <Text>Product not found</Text>
  }

  const addToCart = () => {
    console.log('adding to cart...')
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: product.name}} />

      <Image source={{uri: product.image || defaultPizza}} style={styles.image}/>
      <Text>Select Size</Text>
      <View style={styles.sizesContainer}>
        {sizes.map(size => (
          <TouchableOpacity 
            key={size} 
            style={[styles.sizeTextContainer, { backgroundColor: selectedSize === size ? 'gainsboro' : 'white' }]}
            onPress={() => setSelectedSize(size)}
          >
            <Text style={[styles.sizeText, { color: selectedSize === size ? 'black' : 'grey' }]}>{size}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.price}>RM {product.price}</Text>
      <Button text='Add to Cart' onPress={() => addToCart()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10
  },
  image: {
    width: '100%',
    aspectRatio: 1/1
  },
  sizesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    // backgroundColor: 'green'
  },
  sizeTextContainer: {
    backgroundColor: 'gainsboro',
    // padding: 10,
    width: 50,
    borderRadius: 25,
    aspectRatio: 1/1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sizeText: {
    fontSize: 20
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    // backgroundColor: 'red',
    marginTop: 'auto'
  }
})