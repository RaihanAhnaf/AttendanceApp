import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import style from './TaskList.style';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import CardTask from '../../components/CardTask';

type RootStackParamList = {
  TaskList: undefined;
  Home: undefined;
  TaskDetail: undefined;
};

interface TaskListPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TaskList'>;
}

const TaskList = ({navigation}: TaskListPageProps) => {
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
            <Text style={[style.titleText, style.blackColor]}>Task</Text>
          </View>
        </View>
        <CardTask />
        <View style={{alignItems: 'center', marginTop: 10}}>
          <TouchableOpacity
            style={style.btnLainnya}
            onPress={() => {
              navigation.navigate('TaskDetail');
            }}>
            <Text style={[style.btnText, style.primaryColor]}>
              Test Task Detail
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskList;
