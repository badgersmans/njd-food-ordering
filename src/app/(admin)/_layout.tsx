import { Tabs } from 'expo-router'
import {FontAwesome5, Ionicons} from '@expo/vector-icons';
import Colors from '@/constants/Colors';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.light.tint,
        },
        tabBarActiveTintColor: Colors.light.background,
        tabBarInactiveTintColor: 'gainsboro'
      }}
    >
      <Tabs.Screen name='index' options={{href: null}}/>

      <Tabs.Screen 
        name='menu'
        options={{
          title: 'Menu',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="utensils" size={20} color={color} />
          )
        }}
      />
      <Tabs.Screen name='tabTwo' 
        options={{
          title: 'Orders',
          tabBarIcon: ({color}) => (
            <Ionicons name="cart-outline" size={20} color={color} />
          )
        }} 
      />
    </Tabs>
  )
}