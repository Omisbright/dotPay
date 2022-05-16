import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { BoldText } from './Text'

const MainHeaderComponent = () => {
  return (
        <TouchableOpacity style={styles.mainHeader}>
            <BoldText customstyle={styles.mainHeaderText}>
                Golden Globe Awards
            </BoldText>
        </TouchableOpacity>
  )
}

export default MainHeaderComponent

const styles = StyleSheet.create({
    mainHeader: {
        justifyContent: "center",
        alignItems: "center"
    },
    mainHeaderText: {
        color: "#121212", 
        fontSize: 20
    },
})