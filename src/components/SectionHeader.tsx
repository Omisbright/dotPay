import { StyleSheet, View } from 'react-native'
import React from 'react'
import { width, height } from "../utils/functions/Dimensions"
import { MediumText } from './Text';

interface CategoryProps {
    id: string;
    items: { id: string, photoUrL: string, title: string} [];
    title: string;
}

const SectionHeader = ({item}: {item: CategoryProps}) => ( 
    <View style={styles.container}>
        <MediumText>{item.title}</MediumText>
    </View>
  );

export default SectionHeader

const styles = StyleSheet.create({
    container: {
        padding: 10, 
        backgroundColor: "#bac8d3", 
        marginVertical: 10, 
        width: width * 0.9, 
    }
})