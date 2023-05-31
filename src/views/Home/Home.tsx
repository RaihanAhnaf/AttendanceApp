import {
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Modal,
  Alert,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from './Home.style';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import CountDown from 'react-native-countdown-component';
// import moment from 'moment';

type RootStackParamList = {
  Home: undefined; //current screen

  //   PdpComments: {slug: string}; // a screen that we are
  // navigating to, in the current screen,
  // that we should pass a prop named `slug` to it

  //   Sellers: {data: Array<string>};

  HistoryAttendance: undefined; // a screen that we are navigating to
  // in the current screen, that we don't pass any props to it
  SignIn: undefined;
};

interface HomePageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

const Home = ({navigation}: HomePageProps) => {
  // const [totalDuration, setTotalDuration] = useState(0);

  // useEffect(() => {
  //   var date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss');
  //   var expirydate = '2020-12-23 04:00:45';
  //   var diffr = moment.duration(moment(expirydate).diff(moment(date)));
  //   var hours = parseInt(diffr.asHours());
  //   var minutes = parseInt(diffr.minutes());
  //   var seconds = parseInt(diffr.seconds());
  //   var d = hours * 60 * 60 + minutes * 60 + seconds;
  //   setTotalDuration(d);
  // }, []);

  const [modal, setModal] = useState({
    isVisible: false,
    isOverlay: 0,
  });

  const toggleOverlay = () => {
    setModal({
      ...modal,
      isVisible: !modal.isVisible,
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
          source={require('../../../assets/images/bg-image.png')}
          style={style.image}>
          <View style={style.container}>
            <View>
              <Text style={[style.baseTextName, style.whiteColor]}>Halo,</Text>
              <Text style={[style.titleTextName, style.whiteColor]}>
                Budi Santoso
              </Text>
            </View>
            <View style={{marginLeft: 'auto'}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SignIn');
                }}>
                <Icon name="exit-to-app" color={'white'} size={24} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.boxContent}>
            <View style={style.boxCountdownTime}>
              <Text style={[style.titleTextTime, style.blackColor]}>
                Absensi akan dibuka pada
              </Text>
              {/* <View style={style.containerTime}>
                <Text style={style.titleTime}>
                  React Native CountDown Timer |
                  react-native-countdown-component
                </Text>
                <CountDown
                  until={totalDuration}
                  //duration of countdown in seconds
                  timetoShow={('H', 'M', 'S')}
                  //formate to show
                  onFinish={() => alert('finished')}
                  //on Finish call
                  onPress={() => alert('hello')}
                  //on Press call
                  size={20}
                />
              </View> */}
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity style={style.btnHadir}>
                  <Text style={[style.btnText, style.whiteColor]}>Hadir</Text>
                </TouchableOpacity>
                <View style={style.space} />
                <TouchableOpacity style={style.btnTidakHadir}>
                  <Text style={[style.btnText, style.primaryColor]}>
                    Tidak Hadir
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={[style.subTitleText, style.blackColor]}>
              Riwayat Absensi
            </Text>
            <View style={style.boxHistory}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text style={[style.baseTextDay, style.primaryColor]}>
                    Senin,
                  </Text>
                  <Text style={[style.baseTextDate, style.primaryColor]}>
                    20 Maret 2023
                  </Text>
                </View>
                <View style={[style.boxPil, style.boxPilHadir]}>
                  <Text style={[style.textPil, style.primaryColor]}>Hadir</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={style.keteranganJamAbsensi}>
                  <Text style={style.descJam}>Jam Masuk</Text>
                  <Text style={[style.jam, style.primaryColor]}>07:32</Text>
                </View>
                <View style={style.keteranganJamAbsensi}>
                  <Text style={style.descJam}>Jam Pulang</Text>
                  <Text style={[style.jam, style.primaryColor]}>14:38</Text>
                </View>
                <View style={style.keteranganAbsensi}>
                  <Text style={style.descJam}>Keterangan</Text>
                  {/* <TouchableOpacity>
                        <Text style={[style.fileButton, style.primaryColor]}>file</Text>
                    </TouchableOpacity> */}
                </View>
              </View>
            </View>
            <View style={style.boxHistory}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text style={[style.baseTextDay, style.redColor]}>
                    Jumat,
                  </Text>
                  <Text style={[style.baseTextDate, style.redColor]}>
                    17 Maret 2023
                  </Text>
                </View>
                <View style={[style.boxPil, style.boxPilTidakHadir]}>
                  <Text style={[style.textPil, style.redColor]}>
                    Tidak Hadir
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={style.keteranganJamAbsensi}>
                  <Text style={style.descJam}>Jam Masuk</Text>
                  <Text style={[style.jam, style.redColor]}>-</Text>
                </View>
                <View style={style.keteranganJamAbsensi}>
                  <Text style={style.descJam}>Jam Pulang</Text>
                  <Text style={[style.jam, style.redColor]}>-</Text>
                </View>
                <View style={style.keteranganAbsensi}>
                  <Text style={style.descJam}>Keterangan</Text>
                  <TouchableOpacity
                    onPress={() =>
                      setModal({
                        ...modal,
                        isVisible: !modal.isVisible,
                      })
                    }>
                    <Text style={[style.fileButton, style.primaryColor]}>
                      file
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={style.boxHistory}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text style={[style.baseTextDay, style.orangeColor]}>
                    Kamis,
                  </Text>
                  <Text style={[style.baseTextDate, style.orangeColor]}>
                    16 Maret 2023
                  </Text>
                </View>
                <View style={[style.boxPil, style.boxPilTerlambat]}>
                  <Text style={[style.textPil, style.orangeColor]}>
                    Terlambat
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={style.keteranganJamAbsensi}>
                  <Text style={style.descJam}>Jam Masuk</Text>
                  <Text style={[style.jam, style.orangeColor]}>08:24</Text>
                </View>
                <View style={style.keteranganJamAbsensi}>
                  <Text style={style.descJam}>Jam Pulang</Text>
                  <Text style={[style.jam, style.orangeColor]}>15:02</Text>
                </View>
                <View style={style.keteranganAbsensi}>
                  <Text style={style.descJam}>Keterangan</Text>
                  {/* <TouchableOpacity>
                    <Text style={[style.fileButton, style.primaryColor]}>
                      file
                    </Text>
                  </TouchableOpacity> */}
                </View>
              </View>
            </View>
            <View style={{alignItems: 'center', marginTop: 10}}>
              <TouchableOpacity
                style={style.btnLainnya}
                onPress={() => {
                  navigation.navigate('HistoryAttendance');
                }}>
                <Text style={[style.btnText, style.primaryColor]}>
                  Lihat Lainnya
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
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
              <View style={style.boxPilStatus}>
                <Text style={[style.textPil, style.primaryColor]}>Sakit</Text>
              </View>
              <Text style={style.textTitle}>Tanggal</Text>
              <Text style={style.textSubTitle}>Jumat, 17 Maret 2023</Text>
              <Text style={style.textTitle}>Keterangan</Text>
              <Text style={style.textSubTitle}>Ijin sakit tipes</Text>
              <Text style={style.textTitle}>File Bukti</Text>
              <Text style={style.textSubTitle}>Kosong</Text>
              {/* <Pressable
                  style={[style.button, style.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={style.textStyle}>Hide Modal</Text>
                </Pressable> */}
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Home;
