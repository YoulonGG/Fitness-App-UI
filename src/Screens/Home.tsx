import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const DATA = [
  {
    id: '1',
    title: 'Walk',
    Duration: '20 min',
    Cal: '200 cal',
  },
  {
    id: '2',
    title: 'Cycling',
    Duration: '60 min',
    Cal: '550 cal',
  },
  {
    id: '3',
    title: 'Gym',
    Duration: '80 min',
    Cal: '999 cal',
  },
  {
    id: '4',
    title: 'Football',
    Duration: '60 min',
    Cal: '600 cal',
  },
  {
    id: '5',
    title: 'Tennis',
    Duration: '30 min',
    Cal: '350 cal',
  },
  {
    id: '6',
    title: 'Tennis',
    Duration: '30 min',
    Cal: '350 cal',
  },
  {
    id: '7',
    title: 'Hello',
    Duration: '30 min',
    Cal: '350 cal',
  },
];

const Home = () => {
  const navigation: any = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <View
        style={{
          width: '100%',
          height: 40,
          backgroundColor: 'white',
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: '5%',
          alignItems: 'center',
        }}>
        <AntDesign
          onPress={() => {
            navigation.goBack();
          }}
          name="arrowleft"
          size={25}
          color={'black'}
        />
        <Text style={{fontSize: 17, color: 'black', fontWeight: 'bold'}}>
          Today
        </Text>
        <AntDesign name="arrowleft" size={25} color={'white'} />
      </View>
      <View
        style={{
          width: width * 0.9,
          height: 50,
          backgroundColor: 'skyblue',
          alignSelf: 'center',
          marginTop: 10,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
          Today's Progress!
        </Text>
        <Image
          source={require('../Image/runner.png')}
          style={{marginLeft: 10, width: 30, height: 30}}
        />
      </View>
      <View
        style={{
          width: width * 0.9,
          height: 'auto',
          alignSelf: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <View
          style={{
            backgroundColor: '#eee',
            width: 150,
            height: 60,
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 10,
            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 14, color: 'black'}}>Current Goal</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            1000 Min
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#eee',
            width: 150,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 14, color: 'black'}}>Current Total</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            80 Min
          </Text>
        </View>
      </View>
      <View
        style={{
          width: width * 0.9,
          height: 50,
          backgroundColor: 'purple',
          alignSelf: 'center',
          marginTop: 20,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
          Today's Activity!
        </Text>
        <Image
          source={require('../Image/weightlifter.png')}
          style={{marginLeft: 10, width: 30, height: 30}}
        />
      </View>
      <View
        style={{
          backgroundColor: 'white',
          width: width * 0.9,
          height: height * 0.45,
          marginTop: 15,
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  backgroundColor: '#eee',
                  width: '95%',
                  height: 100,
                  alignSelf: 'center',
                  borderRadius: 10,
                  marginVertical: 5,
                  paddingHorizontal: 15,
                  justifyContent: 'center',
                  flex: 1,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'black',
                  }}>
                  {item.title}
                </Text>
                <Text style={{fontSize: 15, color: 'black'}}>
                  Duration: {item.Duration}
                </Text>
                <Text style={{fontSize: 15, color: 'black'}}>
                  Calories: {item.Cal}
                </Text>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          width: width * 0.9,
          height: 'auto',
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: 140,
            height: 40,
            backgroundColor: 'skyblue',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 20,
          }}>
          <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
            Add Excercise
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: 140,
            height: 40,
            backgroundColor: 'purple',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 20,
          }}>
          <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
            Refresh
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
