import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { MediumText, RegularText } from './Text';
import { width } from "../utils/functions/Dimensions";
import { AwardProps, CategoryProps, SelectedAwardProps } from 'src/screens/main';

export interface NomineeCardProps {
    category: CategoryProps;
    award: AwardProps;
    selectedAwards: SelectedAwardProps[];
    selectedState: (selectedAwards: SelectedAwardProps[] , award: AwardProps) => boolean;
    handleSelection: (category: CategoryProps, award: AwardProps) => void;
 };

const NomineeCard = ({category, award, selectedAwards, handleSelection, selectedState} : NomineeCardProps) => {

  const styles = StyleSheet.create({
    awardTitle: {
      textAlign: "center", 
      color: "#121212"
    },

    container: {
      backgroundColor: selectedState(selectedAwards, award) ? "#d5e8d4" : "#dae8fc",
      marginHorizontal: 3, 
      marginVertical: 5, 
      width: width/2.35, 
      padding: 10, 
      justifyContent:"center", 
      alignItems: "center"
    },

    nomineeImage: {
      width: 60, 
      height:60, 
      borderRadius: 30, 
      marginVertical: 15
    },

    voteButton: {
      borderRadius: 5, 
      alignItems: "center", 
      paddingVertical: 7, 
      width: width/3, 
      paddingHorizontal: 20
    }
  });
  
    return (
      <View style={styles.container}>
        <RegularText numberOfLines={2} customstyle={styles.awardTitle}>{award.title}</RegularText>
        <Image source={{uri: award.photoUrL}} style={styles.nomineeImage} />
        <Pressable onPress={() => handleSelection(category, award)}>
            <LinearGradient colors={['#f5f5f5', '#b3b3b3']} style={styles.voteButton}>
              <MediumText customstyle={{color: "#121212"}}>Vote</MediumText>
            </LinearGradient>
        </Pressable>
      </View>
    )
  };

export default NomineeCard;