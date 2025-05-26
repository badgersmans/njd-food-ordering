import Colors from '@/constants/Colors'
import { Product } from '@/types/types'
import { View, Text, Image, StyleSheet } from 'react-native'

type ProductListItemProps = {
  product: Product
}

export default function ProductListItem({product}: ProductListItemProps) {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image}/>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>RM {product.price}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8
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