import { Link, Stack } from 'expo-router'
import {FontAwesome5, Ionicons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function MenuLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          title: 'Menu',
          headerRight: () => (
            <Link href={'/cart'} asChild>
              <TouchableOpacity>
                <Ionicons name="cart-outline" size={20} color={'black'} />
              </TouchableOpacity>
            </Link>
          )
        }}
      />
    </Stack>
  )
}