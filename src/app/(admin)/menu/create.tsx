import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Button from '@/components/Button'

export default function CreateScreen() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [errors, setErrors] = useState('')

  const onCreate = () => {
    if(!validateInput()) {
      return
    }

    // save in supabase

    resetFields()
  }

  const resetFields = () => {
    setName('')
    setPrice('')
  }

  const validateInput = () => {
    setErrors('')
    if(!name) {
      setErrors('Name is required')
      return false;
    }
    if(!price) {
      setErrors('Price is required')
      return false;
    }
    if(isNaN(parseFloat(price))) {
      setErrors('Price is not a number')
      return false;
    }
    return true
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        placeholder='Name'
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Price</Text>
      <TextInput
        placeholder='9.99'
        style={styles.input}
        keyboardType='numeric'
        value={price}
        onChangeText={setPrice}
      />
      <Text>{errors}</Text>
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