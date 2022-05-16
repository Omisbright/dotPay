import React from 'react'
import SectionHeader from '../components/SectionHeader';
import type { AwardProps, CategoryProps, SelectedAwardProps } from './main'
import { FlatList, StyleSheet } from 'react-native';
import NomineeCard from '../components/NomineeCard';

interface RenderSectionProps {
  selectedAwards: SelectedAwardProps[];
  selectedState: (selectedAwards: SelectedAwardProps[] , award: AwardProps) => boolean;
  handleSelection: (category: CategoryProps, award: AwardProps) => void;
  itemCategory: CategoryProps;
};

const RenderSection = ({itemCategory, selectedAwards, selectedState, handleSelection}: RenderSectionProps) => {
  console.log("selectedState", selectedState)
    return (
      <>
        <SectionHeader item={itemCategory} />
        <FlatList 
          columnWrapperStyle={styles.columnWrapper} 
          contentContainerStyle={styles.contentContainer} 
          showsVerticalScrollIndicator={false}
          numColumns={2} 
          data={itemCategory.items} 
          keyExtractor={(item) => item.id} 
          renderItem={({item}) => <NomineeCard selectedAwards={selectedAwards} selectedState={selectedState} handleSelection={handleSelection} award={item} category={itemCategory} />} 
        />
      </>
    )
  }

export default RenderSection;

const styles = StyleSheet.create({
  columnWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  contentContainer: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  },
})