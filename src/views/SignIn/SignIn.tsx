import {
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput,
  Modal,
  Alert,
  Pressable,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import style from './SignIn.style';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type RootStackParamList = {
  SignIn: undefined;
  Fingerprint: undefined;
};

interface SignInPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
}

const SignIn = ({navigation}: SignInPageProps) => {
  return (
    <ScrollView>
      <ImageBackground
        source={require('../../../assets/images/bg-image.png')}
        style={style.image}>
        <View style={style.boxContainer}>
          <Text style={[style.title, style.blackColor]}>Selamat Datang</Text>
          <Text style={style.subTitle}>Masukkan data Anda dengan benar</Text>
          <View style={style.container}>
            <Text style={[style.label, style.blackColor]}>Username</Text>
            <TextInput style={style.input} placeholder="Username" />
            <View style={style.space} />
            <Text style={[style.label, style.blackColor]}>Password</Text>
            <TextInput
              style={style.input}
              placeholder="Password"
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={style.btn}
              onPress={() => {
                navigation.navigate('Fingerprint');
              }}>
              <Text style={[style.btnText, style.whiteColor]}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default SignIn;
