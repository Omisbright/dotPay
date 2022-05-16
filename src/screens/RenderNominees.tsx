import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NomineeCard from '../components/NomineeCard';
import type { CategoryProps } from './main';

const RenderNominee = ({itemCategory, selectedAwards, selectedState, handleSelection}:{itemCategory: CategoryProps}) => {
    return (
      <FlatList 
        columnWrapperStyle={styles.columnWrapper} 
        contentContainerStyle={styles.contentContainer} 
        showsVerticalScrollIndicator={false}
        numColumns={2} 
        data={itemCategory.items} 
        keyExtractor={(item) => item.id} 
        renderItem={({item}) => <NomineeCard selectedAwards={selectedAwards} selectedState={selectedState} handleSelection={handleSelection} award={item} category={itemCategory} />} 
      />
    )};

export default RenderNominee

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