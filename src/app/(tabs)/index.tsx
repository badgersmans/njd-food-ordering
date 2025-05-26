import { View, Text } from 'react-native'
import ProductListItem from '@/components/ProductListItem'
import products from '@assets/data/products';
const product = products[0];

export default function HomeScreen() {
  return (
    <View>
      <ProductListItem product={product}/>
    </View>
  )
}