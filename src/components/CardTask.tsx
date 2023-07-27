import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  CardTask: undefined;
  TaskList: undefined;
};

interface CardTaskProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'CardTask'>;
}

// const CardTask = ({navigation}: CardTaskProps) => {
const CardTask = () => {
  return (
    <TouchableOpacity>
      <View style={styles.boxTask}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text
              numberOfLines={1}
              style={[styles.baseTextTitleTask, styles.primaryColor]}>
              Ini judul ya ges ya akowkoaeok
            </Text>
          </View>
          <View style={[styles.boxPil, styles.boxPilSelesai]}>
            <Text style={[styles.textPil, styles.primaryColor]}>Selesai</Text>
          </View>
        </View>
        <Text style={styles.textSubTitleDate}>Deadline</Text>
        <Text style={[styles.baseTextDeadline, styles.primaryColor]}>
          20 Maret 2023
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardTask;

const styles = StyleSheet.create({
  primaryColor: {
    color: '#4318FE',
  },
  whiteColor: {
    color: 'white',
  },
  blackColor: {
    color: '#191C1F',
  },
  boxTask: {
    marginTop: 10,
    marginHorizontal: 15,
    height: 111,
    borderRadius: 16,
    backgroundColor: 'white',
    padding: 16,
  },
  boxPil: {
    marginLeft: 'auto',
    height: 26,
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  boxPilSelesai: {
    backgroundColor: '#D0C5FF',
  },
  textPil: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  baseTextTitleTask: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    width: 260,
  },
  textSubTitleDate: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginTop: 10,
  },
  baseTextDeadline: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
});
