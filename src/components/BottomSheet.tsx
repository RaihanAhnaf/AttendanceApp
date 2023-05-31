import {
  Dimensions,
  StyleSheet,
  Text,
  TranslateYTransform,
  View,
} from 'react-native';
import React from 'react';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export const BottomSheet = () => {
  // <BottomSheet
  //   visible={visible}
  //   //setting the visibility state of the bottom shee
  //   onBackButtonPress={toggleBottomNavigationView}
  //   //Toggling the visibility state
  //   onBackdropPress={toggleBottomNavigationView}
  //   //Toggling the visibility state
  // >
  //   {/*Bottom Sheet inner View*/}
  //   <View style={styles.bottomNavigationView}>
  //     <View
  //       style={{
  //         flex: 1,
  //         flexDirection: 'column',
  //         justifyContent: 'space-between',
  //       }}>
  //       <Text
  //         style={{
  //           textAlign: 'center',
  //           padding: 20,
  //           fontSize: 20,
  //         }}>
  //         Share Using
  //       </Text>
  //       <View style={{flex: 1, flexDirection: 'row'}}>
  //         <Text>Halo</Text>
  //       </View>
  //     </View>
  //   </View>
  // </BottomSheet>;
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'green',
    position: 'absolute',
    top: SCREEN_HEIGHT / 1.5,
    borderRadius: 30,
  },
  line: {
    width: 40,
    height: 4,
    backgroundColor: '#CCCECF',
    alignSelf: 'center',
    marginVertical: 24,
    borderRadius: 2,
  },
});

export default BottomSheet;
