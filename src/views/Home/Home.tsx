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
import CardAttendance from '../../components/CardAttendance';
import CardNotPresent from '../../components/CardNotPresent';
import CardLate from '../../components/CardLate';
import FileModal from '../../components/FileModal';
import NotPresentButton from '../../components/NotPresentButton';
import PresentButton from '../../components/PresentButton';
import {useNavigation} from '@react-navigation/native';
import {type StackNavigation} from '../../components/PresentButton';
import CardTask from '../../components/CardTask';
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
  TaskList: undefined;
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

  const {navigate} = useNavigation<StackNavigation>();

  const handleOnNavigate = () => navigate('ForgotPassword');

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
                <PresentButton />
                <View style={style.space} />
                <NotPresentButton />
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={[style.subTitleText, style.blackColor]}>Task</Text>
              <View style={style.btnLainnya2}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('TaskList');
                  }}>
                  <Text style={[style.btnText, style.primaryColor]}>
                    Lihat Lainnya
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <CardTask />
            <View style={{flexDirection: 'row'}}>
              <Text style={[style.subTitleText, style.blackColor]}>
                Riwayat Absensi
              </Text>
              <View style={style.btnLainnya2}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('HistoryAttendance');
                  }}>
                  <Text style={[style.btnText, style.primaryColor]}>
                    Lihat Lainnya
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <CardAttendance />
            <CardNotPresent />
            <CardLate />
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
            <View style={style.bottomSpace} />
          </View>
        </ImageBackground>
      </ScrollView>
      <FileModal isVisible={modal.isVisible} setModal={setModal} />
    </SafeAreaView>
  );
};

export default Home;
