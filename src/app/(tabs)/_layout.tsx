import { Tabs } from 'expo-router'
import {FontAwesome5, Ionicons} from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name='index'
        options={{
          title: 'Menu',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="utensils" size={20} color={color} />
          )
        }}
      />
      <Tabs.Screen name='tabTwo' 
        options={{
          title: 'Orders',
          headerShown: true,
          tabBarIcon: ({color}) => (
            <Ionicons name="cart-outline" size={20} color={color} />          
          )
        }} 
      />
    </Tabs>
  )
}