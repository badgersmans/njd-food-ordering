import { Product } from '@/types/types'
import { View, Text, Image, StyleSheet } from 'react-native'

type ProductListItemProps = {
  product: Product
}

export default function ProductListItem({product}: ProductListItemProps) {
  return (
    <View>
      <Image source={{uri: product.image}} style={styles.image}/>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>RM {product.price}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1/1
  },
  infoContainer: {
    // backgroundColor: 'red',
    gap: 8,
    marginHorizontal: 8
  },
  name: {
    fontWeight: '600',
    fontSize: 25
  },
  price: {
    color: '#6495C0',
    fontSize: 16,
    fontWeight: '600'
  },
})