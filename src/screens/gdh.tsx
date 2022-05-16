import { Pressable, Dimensions, SafeAreaView, Text, View, FlatList, Image, StyleSheet, TouchableOpacity, SectionList, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import api from '../api/Api'; 
import { CONTAINER, AWARDIMAGE } from "./styles"

interface SelectedAwardProps {
  categoryId: string;
  awardId: string
}

interface OldCategoryProps {
    id: string;
    items: { id: string, photoUrL: string, title: string} [];
    title: string;
}

interface NewCategoryProps {
  id: string;
  data: { id: string, photoUrL: string, title: string} [];
  title: string;
}

interface TitleProps {
  data: { id: string, photoUrL: string, title: string} [];
}

interface AwardProps {
  id: string, photoUrL: string, title: string;
}

interface AwardComponentProps {
   category: CategoryProps;
   award: AwardProps;
};

const Main = () => {

  var width = Dimensions.get('window').width; //full width
  var height = Dimensions.get('window').height; //full height

  const [ DATA, setDATA ] = useState<NewCategoryProps[]>([]);
  const [ selectedAwards, setSelectedAwards ] = useState<SelectedAwardProps[]>([]);

  useEffect(() => {
    try {
      async function BallotData () {
        let response = await api.getBallotData();
        const { items } = response;

        let ballots: NewCategoryProps[] = [];

        items.map((element: OldCategoryProps) => {
          const { id, items, title } = element;
          console.log("element", element)
          ballots.push(
            {
              id: id,
              title: title,
              data: items
            }
          )
        })
        setDATA(ballots)
      }
      BallotData();
    } catch (error) {
      console.error
    }
  }, []);
  
  console.log("DATA", DATA);

  const SectionHeader = ({title}: {title: string}) => ( 
    <View style={{padding: 10, backgroundColor: "#000", marginVertical: 10, width: width * 0.9, alignSelf: 'stretch',}}>
        <Text style={{color: "#fff"}}>{title}</Text>
    </View>
  );

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

  const AwardComponent = ({category, award} : AwardComponentProps) => {
    return (
      <TouchableOpacity onPress={() => handleSelection(category, award)} style={{borderWidth: selectedAwards.some((selected) => selected.awardId === award.id) ? 2 : 0, backgroundColor: "dodgerblue", marginHorizontal: 3, marginVertical: 5, width: width/2.35, padding: 10, justifyContent:"center", alignItems: "center"}}>
        <Text numberOfLines={2} style={{textAlign: "center"}}>{award.title}</Text>
        <Image source={{uri: award.photoUrL}} style={AWARDIMAGE} />
        <Pressable onPress={() => console.log("item.id", award.id)} style={{borderWidth: 1, borderRadius: 5, alignItems: "center", paddingVertical: 7, width: width/3, paddingHorizontal: 20}}>
          <Text>Vote</Text>
        </Pressable>
      </TouchableOpacity>
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item, section }) => <AwardComponent award={item} category={section} />}
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader title={title} />
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});

export default Main;