import { Pressable, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import Colors from '@/constants/Colors';
import { forwardRef } from 'react';

type ButtonProps = {
  text: string;
} & TouchableOpacityProps

const Button = forwardRef<TouchableOpacity | null, ButtonProps>(
  ({ text, ...pressableProps }, ref) => {
    return (
      <TouchableOpacity ref={ref} {...pressableProps} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.tint,
    padding: 15,
    alignItems: 'center',
    borderRadius: 100,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default Button;