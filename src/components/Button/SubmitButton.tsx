import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { MediumText } from '../Text'
import { width } from '../../utils/functions/Dimensions'

const SubmitButton = ({text, onPress}: {text: string, onPress: () => void}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
        <LinearGradient colors={['#f5f5f5', '#b3b3b3']} style={styles.button}>
            <MediumText customstyle={{color: "#121212"}}>
                {text}
            </MediumText>
        </LinearGradient>
    </Pressable> 
  )
}

export default SubmitButton

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center", 
        width: width * 0.5,
        padding: 15,
        borderRadius: 6,
    },
})