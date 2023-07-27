import {
  Alert,
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function NotPresentButton() {
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
    <View>
      <View>
        <TouchableOpacity
          style={styles.btnTidakHadir}
          onPress={() => {
            setModal({
              ...modal,
              isVisible: !modal.isVisible,
            });
          }}>
          <Text style={[styles.btnText, styles.primaryColor]}>Tidak Hadir</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Modal
          animationType="none"
          transparent={true}
          visible={modal.isVisible}
          style={styles.modalParent}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModal({
              ...modal,
              isVisible: !modal.isVisible,
            });
          }}>
          <View style={styles.centeredView}>
            <Pressable
              style={styles.bg}
              onPress={() => {
                setModal({
                  ...modal,
                  isVisible: !modal.isVisible,
                });
              }}
            />
            <View style={styles.modalView}>
              <Text style={[styles.modalTitleText, styles.blackColor]}>
                Tidak Hadir
              </Text>
              <Text style={styles.textTitle}>Status</Text>
              <View style={{flexDirection: 'row'}}>
                <Pressable
                  style={[
                    btnSelected == 1
                      ? styles.btnSelected
                      : styles.btnNotSelected,
                  ]}
                  onPress={() => setBtnSelected(1)}>
                  <Text
                    style={[
                      styles.textPil,
                      btnSelected == 1
                        ? styles.primaryColor
                        : styles.blackColor,
                    ]}>
                    Sakit
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    btnSelected == 2
                      ? styles.btnSelected
                      : styles.btnNotSelected,
                  ]}
                  onPress={() => setBtnSelected(2)}>
                  <Text
                    style={[
                      styles.textPil,
                      btnSelected == 2
                        ? styles.primaryColor
                        : styles.blackColor,
                    ]}>
                    Izin
                  </Text>
                </Pressable>
              </View>
              <Text style={styles.textTitle}>Keterangan</Text>
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
              <Text style={styles.textTitle}>File Bukti</Text>
              <Pressable style={styles.btnUpload} onPress={() => []}>
                <Icon
                  name="attach-file"
                  color={'white'}
                  size={24}
                  style={{marginRight: 10}}
                />
                <Text style={[styles.btnText, styles.whiteColor]}>
                  Upload File
                </Text>
              </Pressable>
              <Pressable style={styles.btn} onPress={() => []}>
                <Text style={[styles.btnText, styles.whiteColor]}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //fu
const styles = StyleSheet.create({
  primaryColor: {
    color: '#4318FE',
  },
  blackColor: {
    color: '#191C1F',
  },
  whiteColor: {
    color: 'white',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    marginTop: 40,
    backgroundColor: '#4318FE',
    borderRadius: 8,
  },
  btnText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  btnTidakHadir: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 46,
    width: 121,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  modalParent: {
    width: width,
    height: height,
  },
  centeredView: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  modalView: {
    height: 500,
    width: 328,
    padding: 24,
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // alignItems: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalTitleText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0, 0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  textTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
  },
  textSubTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 20,
  },
  subTitleText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    marginTop: 30,
    marginLeft: 16,
    marginBottom: 10,
  },
  btnSelected: {
    borderColor: '#4318FE',
    borderWidth: 1.5,
    height: 30,
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
    marginRight: 10,
  },
  btnNotSelected: {
    borderColor: '#CCCECF',
    borderWidth: 1.5,
    height: 30,
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
    marginRight: 10,
  },
  textPil: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  btnUpload: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    marginTop: 10,
    backgroundColor: '#868CFF',
    borderRadius: 8,
    flexDirection: 'row',
  },
});
