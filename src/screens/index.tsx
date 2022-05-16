import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';

const Index = () => {
  return (
    <SafeAreaView>
    <View style={CONTAINER}>
        <FlatList
          ListHeaderComponent={() => 
            <View>
                <Text style={{color: "#121212", fontSize: 20}}>
                    Golden Globe Awards
                </Text>
            </View>
          }
          ListHeaderComponentStyle={{
            justifyContent: "center",
            alignItems: "center"
          }}
          data={ballotData} 
          keyExtractor={(item) => item.id} 
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <Categories itemCategory={item} />} 
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

export default Index;

const styles = StyleSheet.create({})