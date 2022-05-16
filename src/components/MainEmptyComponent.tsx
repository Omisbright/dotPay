import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height } from '../utils/functions/Dimensions';
import { RegularText } from './Text';

const MainEmptyComponent = () => {
  return (
    <View style={styles.text}>
      <RegularText>There are no awards at the moment</RegularText>
    </View>
  )
}

export default MainEmptyComponent;

const styles = StyleSheet.create({
  text: {
    height: height * 0.8, 
    justifyContent: "center", 
    alignItems: "center"}
})