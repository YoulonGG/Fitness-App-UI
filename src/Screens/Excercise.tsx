import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const Excercise = () => {
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
          Add Excercise
        </Text>
        <AntDesign name="arrowleft" size={25} color={'white'} />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 0.8,
        }}>
        <View
          style={{
            // backgroundColor: 'white',
            width: '100%',
            height: height * 0.09,
            paddingHorizontal: 40,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          <Text style={styles.InputText}>Excercise Name</Text>
          <View style={styles.InputBox}>
            <TextInput placeholder="" style={{fontSize: 15, paddingLeft: 10}} />
          </View>
        </View>
        <View
          style={{
            // backgroundColor: 'white',
            width: '100%',
            height: height * 0.09,
            paddingHorizontal: 40,
            alignSelf: 'center',
            marginTop: 5,
          }}>
          <Text style={styles.InputText}>Duration</Text>
          <View style={styles.InputBox}>
            <TextInput placeholder="" style={{fontSize: 15, paddingLeft: 10}} />
          </View>
        </View>
        <View
          style={{
            // backgroundColor: 'white',
            width: '100%',
            height: height * 0.09,
            paddingHorizontal: 40,
            alignSelf: 'center',
            marginTop: 5,
          }}>
          <Text style={styles.InputText}>Calories</Text>
          <View style={styles.InputBox}>
            <TextInput placeholder="" style={{fontSize: 15, paddingLeft: 10}} />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: height * 0.09,
            paddingHorizontal: 40,
            alignSelf: 'center',

            marginTop: 5,
          }}>
          <Text
            style={{
              height: '30%',
              fontSize: 16,
              color: 'black',
              justifyContent: 'center',
            }}>
            Date
          </Text>
          <View
            style={{
              width: '100%',
              height: '70%',
              backgroundColor: '#D5D5D5',
              borderRadius: 10,
              justifyContent: 'center',
            }}>
            <View>
              <TextInput
                placeholder=""
                style={{fontSize: 15, paddingLeft: 10}}
              />
            </View>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <TouchableOpacity
            style={{
              width: 150,
              height: 40,
              borderRadius: 10,
              backgroundColor: 'skyblue',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
              Submit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.push('Login');
            }}
            style={{
              width: 150,
              height: 40,
              marginTop: 10,
              borderRadius: 10,
              backgroundColor: 'red',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Excercise;

const styles = StyleSheet.create({
  InputBox: {
    width: '100%',
    height: '65%',
    backgroundColor: '#D5D5D5',
    borderRadius: 10,
    justifyContent: 'center',
  },
  InputText: {
    height: '35%',
    fontSize: 16,
    color: 'black',
    justifyContent: 'center',
  },
});
