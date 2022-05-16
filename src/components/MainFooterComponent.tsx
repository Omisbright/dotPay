import { Pressable, StyleSheet, Text, View, Modal } from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { width } from '../utils/functions/Dimensions'
import { MediumText } from './Text'
import { RFValue } from 'react-native-responsive-fontsize'
import type { AwardProps, SelectedAwardProps } from '../screens/main'
import SuccessModal from './Modal/SuccessModal'

const MainFooterComponent = ({selectedAwards, setSelectedAwards} : {selectedAwards: SelectedAwardProps[], setSelectedAwards: Dispatch<SetStateAction<SelectedAwardProps[]>>}) => {
    console.log("selectedAwards", selectedAwards)
  return (
    <SuccessModal setSelectedAwards={setSelectedAwards} />
  )
}

export default MainFooterComponent
