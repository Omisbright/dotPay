import { Pressable, Dimensions, SafeAreaView, Text, View, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import api from '../api/Api'; 
import LinearGradient from 'react-native-linear-gradient';
import  { RFValue } from "react-native-responsive-fontsize";
import SectionComponent from './RenderSection';

interface SelectedAwardProps {
  categoryId: string;
  awardId: string
}

interface CategoryProps {
    id: string;
    items: { id: string, photoUrL: string, title: string} [];
    title: string;
}

interface AwardProps {
  id: string, photoUrL: string, title: string;
}

interface AwardComponentProps {
   category: CategoryProps;
   award: AwardProps;
};

const Main = () => {

  const width = Dimensions.get('window').width; //full width
  const height = Dimensions.get('window').height; //full height

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

  // const SectionHeader = ({item}: {item: CategoryProps}) => ( 
  //   <View style={{padding: 10, backgroundColor: "#bac8d3", marginVertical: 10, width: width * 0.9, alignSelf: 'stretch',}}>
  //       <Text style={{color: "#fff"}}>{item.title}</Text>
  //   </View>
  // );

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
  )

  // const AwardComponent = ({category, award} : AwardComponentProps) => {
  //   return (
  //     <View style={{backgroundColor: selectedState(selectedAwards, award) ? "#d5e8d4" : "#dae8fc", marginHorizontal: 3, marginVertical: 5, width: width/2.35, padding: 10, justifyContent:"center", alignItems: "center"}}>
  //       <Text numberOfLines={2} style={{textAlign: "center", color: "#121212"}}>{award.title}</Text>
  //       <Image source={{uri: award.photoUrL}} style={} />
  //       <Pressable onPress={() => handleSelection(category, award)}>
  //           <LinearGradient colors={['#f5f5f5', '#b3b3b3']} style={{borderRadius: 5, alignItems: "center", paddingVertical: 7, width: width/3, paddingHorizontal: 20}}>
  //             <Text style={{color: "#121212"}}>Vote</Text>
  //           </LinearGradient>
  //       </Pressable>
  //     </View>
  //   )
  // };

  // const Categories = ({itemCategory}:{itemCategory: CategoryProps}) => {
  //   return (
  //     <>
  //       <SectionHeader item={itemCategory} />
  //       <FlatList 
  //         columnWrapperStyle={{
  //             flex: 1,
  //             justifyContent: 'flex-start'
  //           }} 
  //         contentContainerStyle={{
  //             backgroundColor: "red",
  //             justifyContent: "center",
  //             alignItems: "center"
  //           }} 
  //         showsVerticalScrollIndicator={false}
  //         numColumns={2} 
  //         data={itemCategory.items} 
  //         keyExtractor={(item) => item.id} 
  //         renderItem={({item}) => <AwardComponent award={item} category={itemCategory} />} 
  //       />
  //     </>
  //   )
  // }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={() => <TouchableOpacity>
            <Text style={{color: "#121212", fontSize: 20}}>
                Golden Globe Awards
            </Text>
          </TouchableOpacity>}
          ListHeaderComponentStyle={{
            justifyContent: "center",
            alignItems: "center"
          }}
          data={ballotData} 
          keyExtractor={(item) => item.id} 
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <SectionComponent selectedAwards={selectedAwards} selectedState={selectedState} handleSelection={handleSelection} itemCategory={item} />} 
          ListEmptyComponent={() => <View style={{height: height * 0.8, justifyContent: "center", alignItems: "center"}}><Text>There are no awards at the moment</Text></View>}
          ListFooterComponent={() => 
          <Pressable onPress={() => console.log("selectedAwards", selectedAwards)}>
            <LinearGradient colors={['#f5f5f5', '#b3b3b3']} 
              style={{
                justifyContent: "center",
                alignItems: "center", 
                width: width * 0.5,
                padding: 15,
                borderRadius: 6,
                backgroundColor: "#000"
              }}
            >
              <Text style={{color: "#121212"}}>
                Submit
              </Text>
            </LinearGradient>
          </Pressable>
          }
          ListFooterComponentStyle={{
            marginTop: RFValue(20),
            justifyContent: "center",
            alignItems: "center"
          }}
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
  }
})