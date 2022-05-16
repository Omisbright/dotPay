import { SafeAreaView, View, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import api from '../api/Api'; 
import RenderSection from './RenderSection';
import MainHeaderComponent from '../components/MainHeaderComponent';
import MainEmptyComponent from '../components/MainEmptyComponent';
import MainFooterComponent  from "../components/MainFooterComponent";

export interface SelectedAwardProps {
  categoryId: string;
  awardId: string
}

export interface CategoryProps {
    id: string;
    items: { id: string, photoUrL: string, title: string} [];
    title: string;
}

export interface AwardProps {
  id: string, photoUrL: string, title: string;
}

export interface AwardComponentProps {
   category: CategoryProps;
   award: AwardProps;
};

const Main = () => {

  const [ ballotData, setBallotData ] = useState<CategoryProps[]>();
  const [ selectedAwards, setSelectedAwards ] = useState<SelectedAwardProps[]>([]);

  useEffect(() => {
    try {
      async function BallotData () {
        let response = await api.getBallotData()
        const { items } = response
        setBallotData(items)
      }
      BallotData();
    } catch (error) {
      console.error
    }
  }, []);

  const handleSelection = (category: CategoryProps, award: AwardProps) => {
    const categoryId = category.id;
    const awardId = award.id;
    const data = {categoryId, awardId};
    const categoryExists = selectedAwards.some(( selected ) => selected.categoryId === categoryId)

    if (categoryExists) {
        const filteredAwards = selectedAwards.filter((selected) => (selected.categoryId != categoryId))
        setSelectedAwards([...filteredAwards, data]);
    } else {
        setSelectedAwards((prevAwards) => ([...prevAwards, data]));
    }
  };

  const selectedState = (selectedAwards: SelectedAwardProps[] , award: AwardProps) => (
    selectedAwards.some((selected: SelectedAwardProps) => selected.awardId === award.id)
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={() => <MainHeaderComponent />}
          data={ballotData} 
          keyExtractor={(item) => item.id} 
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <RenderSection  selectedAwards={selectedAwards} selectedState={selectedState} handleSelection={handleSelection} itemCategory={item} />} 
          ListEmptyComponent={() => <MainEmptyComponent />}
          ListFooterComponent={({item}) => <>{item && <MainFooterComponent setSelectedAwards={setSelectedAwards} selectedAwards={selectedAwards}  />}</>}
        />
      </View>
    </SafeAreaView>
  )
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
})