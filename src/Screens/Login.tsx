import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const Login = () => {
  const navigation: any = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <View
        style={{
          width: '100%',
          height: 40,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'black', fontSize: 17, fontWeight: 'bold'}}>
          Log In
        </Text>
      </View>
      <View
        style={{
          width: width * 0.5,
          height: height * 0.23,
          alignSelf: 'center',
          // backgroundColor: 'white',
          marginTop: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../Image/treadmill-machine.png')}
          style={{width: '90%', height: '100%'}}
        />
      </View>
      <View
        style={{
          // backgroundColor: 'white',
          width: '100%',
          height: height * 0.09,
          paddingHorizontal: 40,
          alignSelf: 'center',
          marginTop: 20,
        }}>
        <Text style={styles.InputText}>Username</Text>
        <View style={styles.InputBox}>
          <TextInput
            placeholder="Username"
            style={{fontSize: 15, paddingLeft: 10}}
          />
        </View>
      </View>
      <View
        style={{
          // backgroundColor: 'white',
          width: '100%',
          height: height * 0.09,
          paddingHorizontal: 40,
          alignSelf: 'center',
          marginTop: 10,
        }}>
        <Text style={styles.InputText}>Password</Text>
        <View style={styles.InputBox}>
          <TextInput
            placeholder="Password"
            style={{fontSize: 15, paddingLeft: 10}}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          justifyContent: 'center',
          width: '100%',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.push('Home');
          }}
          style={{
            width: 90,
            height: 40,
            backgroundColor: 'skyblue',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
            Log In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 90,
            height: 40,
            backgroundColor: 'purple',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

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
