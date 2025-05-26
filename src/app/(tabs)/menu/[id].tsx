import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

export default function ProductDetails() {
  const {id} = useLocalSearchParams()
  return (
    <View>
      <Stack.Screen options={{title: 'Details'}} />
      <Text>pizza {id}</Text>
    </View>
  )
}