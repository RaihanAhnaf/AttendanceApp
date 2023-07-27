import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CardComment = () => {
  return (
    <View style={[styles.boxText]}>
      <Text style={[styles.textName, styles.primaryColor]}>Admin</Text>
      <Text style={[styles.textComment, styles.blackColor]}>Lorem Ipsum</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.textDate}>20 Maret 2023</Text>
        <Text style={styles.textDate}>at</Text>
        <Text style={styles.textDate}>11:41</Text>
      </View>
    </View>
  );
};

export default CardComment;

const styles = StyleSheet.create({
  primaryColor: {
    color: '#4318FE',
  },
  blackColor: {
    color: '#191C1F',
  },
  boxText: {
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  textName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  textComment: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 5,
  },
  textDate: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    marginRight: 5,
  },
});
