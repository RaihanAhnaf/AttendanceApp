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
  Home: undefined;
};

interface SignInPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
}

const SignIn = ({navigation}: SignInPageProps) => {
  const [modal, setModal] = useState({
    isVisible: false,
    isOverlay: 0,
  });

  const [btnSelected, setBtnSelected] = useState(1);

  const toggleOverlay = () => {
    setModal({
      ...modal,
      isVisible: !modal.isVisible,
    });
  };

  return (
    <ScrollView>
      <ImageBackground
        source={require('../../../assets/images/bg-image.png')}
        style={style.image}>
        <View style={{marginLeft: 'auto'}}>
          <TouchableOpacity
            onPress={() => {
              setModal({
                ...modal,
                isVisible: !modal.isVisible,
              });
            }}>
            <Icon name="exit-to-app" color={'white'} size={24} />
          </TouchableOpacity>
        </View>
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
                navigation.navigate('Home');
              }}>
              <Text style={[style.btnText, style.whiteColor]}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Modal
            animationType="none"
            transparent={true}
            visible={modal.isVisible}
            style={style.modalParent}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModal({
                ...modal,
                isVisible: !modal.isVisible,
              });
            }}>
            <View style={style.centeredView}>
              <Pressable
                style={style.bg}
                onPress={() => {
                  setModal({
                    ...modal,
                    isVisible: !modal.isVisible,
                  });
                }}
              />
              <View style={style.modalView}>
                <Text style={[style.modalTitleText, style.blackColor]}>
                  Tidak Hadir
                </Text>
                <Text style={style.textTitle}>Status</Text>
                <View style={{flexDirection: 'row'}}>
                  <Pressable
                    style={[
                      btnSelected == 1
                        ? style.btnSelected
                        : style.btnNotSelected,
                    ]}
                    onPress={() => setBtnSelected(1)}>
                    <Text
                      style={[
                        style.textPil,
                        btnSelected == 1
                          ? style.primaryColor
                          : style.blackColor,
                      ]}>
                      Sakit
                    </Text>
                  </Pressable>
                  <Pressable
                    style={[
                      btnSelected == 2
                        ? style.btnSelected
                        : style.btnNotSelected,
                    ]}
                    onPress={() => setBtnSelected(2)}>
                    <Text
                      style={[
                        style.textPil,
                        btnSelected == 2
                          ? style.primaryColor
                          : style.blackColor,
                      ]}>
                      Izin
                    </Text>
                  </Pressable>
                </View>
                <Text style={style.textTitle}>Keterangan</Text>
                <TextInput
                  multiline={true}
                  numberOfLines={4}
                  style={{
                    borderWidth: 1,
                    borderRadius: 5,
                    marginBottom: 20,
                    maxHeight: 100,
                  }}
                  placeholder="Keterangan"
                />
                <Text style={style.textTitle}>File Bukti</Text>
                <Pressable style={style.btnUpload} onPress={() => []}>
                  <Icon
                    name="attach-file"
                    color={'white'}
                    size={24}
                    style={{marginRight: 10}}
                  />
                  <Text style={[style.btnText, style.whiteColor]}>
                    Upload File
                  </Text>
                </Pressable>
                <Pressable style={style.btn} onPress={() => []}>
                  <Text style={[style.btnText, style.whiteColor]}>Submit</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default SignIn;
