import Colors from '@/constants/Colors'
import { Product } from '@/types/types'
import { Link, useSegments } from 'expo-router'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

type ProductListItemProps = {
  product: Product
}

export const defaultPizza = `https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png`

export default function ProductListItem({product}: ProductListItemProps) {
  const segments = useSegments()
  // console.log(segments)
  return (
    <Link href={`/${segments[0]}/menu/${product.id}`} asChild>
      <TouchableOpacity style={styles.container}>
        <Image 
          source={{uri: product.image || defaultPizza}} 
          style={styles.image}
          resizeMode='contain'
        />

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>RM {product.price}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
    flex: 1,
    maxWidth: '50%'
  },
  image: {
    width: '100%',
    aspectRatio: 1/1
  },
  infoContainer: {
    // backgroundColor: 'red',
    gap: 10,
    // marginHorizontal: 8
  },
  name: {
    fontWeight: '600',
    fontSize: 23
  },
  price: {
    color: Colors.light.tint,
    fontSize: 16,
    fontWeight: 'bold'
  },
})