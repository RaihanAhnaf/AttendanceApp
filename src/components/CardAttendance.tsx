import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CardAttendance = () => {
  return (
    <View style={style.boxHistory}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={[style.baseTextDay, style.primaryColor]}>Senin,</Text>
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
  );
};

export default CardAttendance;

const style = StyleSheet.create({
  primaryColor: {
    color: '#4318FE',
  },
  whiteColor: {
    color: 'white',
  },
  blackColor: {
    color: '#191C1F',
  },
  redColor: {
    color: '#F53939',
  },
  orangeColor: {
    color: '#F97316',
  },
  boxPilHadir: {
    backgroundColor: '#D0C5FF',
  },
  boxPilTidakHadir: {
    backgroundColor: '#fdcece',
  },
  boxPilTerlambat: {
    backgroundColor: '#fedcc5',
  },
  boxHistory: {
    marginTop: 10,
    marginHorizontal: 15,
    height: 138,
    borderRadius: 16,
    backgroundColor: 'white',
    padding: 16,
  },
  baseTextDay: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    opacity: 0.6,
  },
  baseTextDate: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    marginTop: -6,
  },
  boxPil: {
    marginLeft: 'auto',
    height: 26,
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 10,
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
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
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
  keteranganJamAbsensi: {
    marginTop: 10,
    flex: 1,
  },
  keteranganAbsensi: {
    marginTop: 10,
    marginLeft: 'auto',
    alignItems: 'center',
  },
  descJam: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  jam: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    marginTop: -5,
  },
  fileButton: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
