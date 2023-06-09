import {
  Alert,
  Button,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import style from './History.style';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import BottomSheet from '../../components/BottomSheet';
import {BottomSheet} from 'react-native-btr';
import DatePicker from 'react-native-date-picker';
import CardAttendance from '../../components/CardAttendance';
import BottomSheets from '../../components/BottomSheets';

type RootStackParamList = {
  HistoryAttendance: undefined;
  Home: undefined;
  Blank: undefined;
};

interface HistoryAttendancePageProps {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'HistoryAttendance'
  >;
}

const HistoryAttendance = ({navigation}: HistoryAttendancePageProps) => {
  const [modal, setModal] = useState({
    isVisible: false,
    isOverlay: 0,
  });

  const [btnSelected, setBtnSelected] = useState(1);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startModalVisible, setStartModalVisible] = useState(false);
  const [endModalVisible, setEndModalVisible] = useState(false);

  const handleStartDateChange = (date: React.SetStateAction<Date>) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: React.SetStateAction<Date>) => {
    setEndDate(date);
  };

  const openStartDatePicker = () => {
    setStartModalVisible(true);
  };

  const openEndDatePicker = () => {
    setEndModalVisible(true);
  };

  const closeStartDatePicker = () => {
    setStartModalVisible(false);
  };

  const closeEndDatePicker = () => {
    setEndModalVisible(false);
  };

  const toggleOverlay = () => {
    setModal({
      ...modal,
      isVisible: !modal.isVisible,
    });
  };

  const [visible, setVisible] = useState(false);

  const toggleBottomSheet = () => {
    setVisible(!visible);
  };

  const onPress = () => {
    BottomSheets;
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{paddingRight: 16}}>
              <Icon
                name="arrow-back"
                color={'black'}
                size={24}
                onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>
            <Text style={[style.titleText, style.blackColor]}>
              Riwayat Absensi
            </Text>
          </View>
          <View style={{marginLeft: 'auto'}}>
            <TouchableOpacity style={{paddingRight: 16}} onPress={onPress}>
              <Icon name="filter-alt" color={'black'} size={24} />
            </TouchableOpacity>
          </View>
        </View>
        <CardAttendance />
        <View style={style.boxHistory}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={[style.baseTextDay, style.redColor]}>Jumat,</Text>
              <Text style={[style.baseTextDate, style.redColor]}>
                17 Maret 2023
              </Text>
            </View>
            <View style={[style.boxPil, style.boxPilTidakHadir]}>
              <Text style={[style.textPil, style.redColor]}>Tidak Hadir</Text>
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
                <Text style={[style.fileButton, style.primaryColor]}>file</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={style.boxHistory}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={[style.baseTextDay, style.orangeColor]}>Kamis,</Text>
              <Text style={[style.baseTextDate, style.orangeColor]}>
                16 Maret 2023
              </Text>
            </View>
            <View style={[style.boxPil, style.boxPilTerlambat]}>
              <Text style={[style.textPil, style.orangeColor]}>Terlambat</Text>
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
                            <Text style={[style.fileButton, style.primaryColor]}>file</Text>
                        </TouchableOpacity> */}
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop: 10}}>
          <TouchableOpacity
            style={style.btnLainnya}
            onPress={() => {
              navigation.navigate('Blank');
            }}>
            <Text style={[style.btnText, style.primaryColor]}>
              Test Fingerprint
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* <BottomSheet /> */}
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomSheet}
        onBackdropPress={toggleBottomSheet}>
        <View style={style.bottomSheet}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <View style={style.line} />
            <View style={{flex: 1}}>
              <Text style={[style.textTitleBottomSheet, style.blackColor]}>
                Status
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Pressable
                  style={[
                    btnSelected == 1 ? style.btnSelected : style.btnNotSelected,
                  ]}
                  onPress={() => setBtnSelected(1)}>
                  <Text
                    style={[
                      style.textPil,
                      btnSelected == 1 ? style.primaryColor : style.blackColor,
                    ]}>
                    Hadir
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    btnSelected == 2 ? style.btnSelected : style.btnNotSelected,
                  ]}
                  onPress={() => setBtnSelected(2)}>
                  <Text
                    style={[
                      style.textPil,
                      btnSelected == 2 ? style.primaryColor : style.blackColor,
                    ]}>
                    Terlambat
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    btnSelected == 3 ? style.btnSelected : style.btnNotSelected,
                  ]}
                  onPress={() => setBtnSelected(3)}>
                  <Text
                    style={[
                      style.textPil,
                      btnSelected == 3 ? style.primaryColor : style.blackColor,
                    ]}>
                    Tidak Hadir
                  </Text>
                </Pressable>
              </View>
              <Text style={[style.textTitleBottomSheet, style.blackColor]}>
                Tanggal
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text>Dari</Text>
                  {/* <TouchableOpacity onPress={() => setOpen(true)}> */}
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    <TouchableOpacity onPress={openStartDatePicker}>
                      <Icon name="date-range" color={'black'} size={24} />
                    </TouchableOpacity>
                    <Modal
                      visible={startModalVisible}
                      transparent={true}
                      animationType="slide"
                      onRequestClose={closeStartDatePicker}>
                      <View style={style.modalContainer}>
                        <View style={style.modalContent}>
                          <DatePicker
                            date={startDate}
                            onDateChange={handleStartDateChange}
                            mode="date"
                          />
                          <Button
                            title="Selesai"
                            onPress={closeStartDatePicker}
                          />
                        </View>
                      </View>
                    </Modal>
                    <Text style={{marginLeft: 10}}>
                      {startDate.toDateString()}
                    </Text>
                  </View>
                </View>
                <View style={{marginLeft: 30}}>
                  <Text>Hingga</Text>
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    <TouchableOpacity onPress={openEndDatePicker}>
                      <Icon name="date-range" color={'black'} size={24} />
                    </TouchableOpacity>
                    <Modal
                      visible={endModalVisible}
                      transparent={true}
                      animationType="slide"
                      onRequestClose={closeEndDatePicker}>
                      <View style={style.modalContainer}>
                        <View style={style.modalContent}>
                          <DatePicker
                            date={endDate}
                            onDateChange={handleEndDateChange}
                            mode="date"
                          />
                          <Button
                            title="Selesai"
                            onPress={closeEndDatePicker}
                          />
                        </View>
                      </View>
                    </Modal>
                    <Text style={{marginLeft: 10}}>
                      {endDate.toDateString()}
                    </Text>
                  </View>
                </View>
              </View>
              <Pressable style={style.btn} onPress={() => []}>
                <Text style={[style.btnText, style.whiteColor]}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </BottomSheet>

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

export default HistoryAttendance;
