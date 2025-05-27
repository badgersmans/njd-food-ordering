import { Link, Stack } from 'expo-router'
import {Feather, AntDesign} from '@expo/vector-icons';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { useCart } from '@/providers/CartProvider';
import Colors from '@/constants/Colors';

export default function MenuLayout() {
  const {items} = useCart()

  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          title: 'Menu',
          headerRight: () => (
          <Link href={'/'} asChild>
            <TouchableOpacity style={styles.cartContainer}>
              <AntDesign name="plussquareo" size={24} color={Colors.light.tint} />
              {items.length > 0 && (
                <View style={styles.cartCounter}>
                  <Text style={styles.countText}>{items.length}</Text>
                </View>
              )}
            </TouchableOpacity>
          </Link>
        )
        }}
      />

      <Stack.Screen
        name='[id]'
        options={{
          title: 'Menu',
          headerRight: () => (
          <Link href={'/'} asChild>
            <TouchableOpacity style={styles.cartContainer}>
              <Feather name="edit" size={24} color={Colors.light.tint} />
              {items.length > 0 && (
                <View style={styles.cartCounter}>
                  <Text style={styles.countText}>{items.length}</Text>
                </View>
              )}
            </TouchableOpacity>
          </Link>
        )
        }}
      />
    </Stack>
  )
}

const styles = StyleSheet.create({
  cartContainer: {
    // backgroundColor: 'red',
    width: 30
  },
  cartCounter: {
    position: 'absolute',
    backgroundColor: Colors.light.tint,
    bottom: -4,
    right: 0,
    // width: 16,
    alignItems: 'center',
    borderRadius: 100,
    padding: 1
  },
  countText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600'
  }
})