import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function ProductDetails() {
  const {id} = useLocalSearchParams()
  return (
    <View>
      <Text>pizza {id}</Text>
    </View>
  )
}