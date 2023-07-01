import {
  Text,
  StyleSheet,
  View,
  Modal,
  Alert,
  Pressable,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';

const FileModal = () => {
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
  );
};

export default FileModal;

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
const style = StyleSheet.create({
  primaryColor: {
    color: '#4318FE',
  },
  blackColor: {
    color: '#191C1F',
  },
  boxPilStatus: {
    borderWidth: 1.5,
    borderColor: '#4318FE',
    marginRight: 'auto',
    height: 30,
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  textPil: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
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
    height: 380,
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
});
