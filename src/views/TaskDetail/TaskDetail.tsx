import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Pressable,
  TextInput,
} from 'react-native';
import React, {Component, useState} from 'react';
import style from './TaskDetail.style';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CardComment from '../../components/CardComment';
import {CheckBox} from '@rneui/themed';

type RootStackParamList = {
  TaskDetail: undefined;
  Home: undefined;
};

interface TaskDetailPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TaskDetail'>;
}

const TaskDetail = ({navigation}: TaskDetailPageProps) => {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  return (
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
            Judul aokwoake
          </Text>
        </View>
      </View>
      <View style={style.boxDescription}>
        <Text style={[style.primaryColor, style.textDescription]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>
      <View style={style.boxDeadline}>
        <View style={{flexDirection: 'row'}}>
          <Text style={style.textDeadline}>Deadline</Text>
          <View style={{marginLeft: 'auto'}}>
            <Text style={[style.textDeadlineDate, style.primaryColor]}>
              20 Maret 2023
            </Text>
          </View>
        </View>
      </View>
      <View style={style.boxToDo}>
        <Text style={style.textDeadline}>To Do</Text>
        <CheckBox
          checked={checked1}
          onPress={() => setChecked1(!checked1)}
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checkedColor="blue"
          title="Task 1"
        />
        <CheckBox
          checked={checked2}
          onPress={() => setChecked2(!checked2)}
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checkedColor="blue"
          title="Task 2"
        />
      </View>
      <View style={style.boxToDo}>
        <Text>Comment</Text>
        <CardComment />
        <TextInput
          style={{
            borderWidth: 1.5,
            borderRadius: 5,
            marginTop: 20,
            maxHeight: 100,
            paddingLeft: 16,
          }}
          placeholder="Add Comment"
        />
      </View>
      <Pressable style={style.btn} onPress={() => []}>
        <Text style={[style.btnText, style.whiteColor]}>Selesai</Text>
      </Pressable>
    </ScrollView>
  );
};

export default TaskDetail;
