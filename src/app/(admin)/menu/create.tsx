import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Button from '@/components/Button'

export default function CreateScreen() {

  const onCreate = () => {
    console.log('created...')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        placeholder='Name'
        style={styles.input}
      />

      <Text style={styles.label}>Price</Text>
      <TextInput
        placeholder='9.99'
        style={styles.input}
        keyboardType='numeric'
      />

      <Button text='Create' onPress={onCreate}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },
  label:{
    color: 'grey',
    fontSize: 16
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 20
  },
})