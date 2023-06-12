import React from 'react';
import {FlatList, Text, View} from 'react-native';

const data = [
  {id: '1', title: 'Item 1'},
  {id: '2', title: 'Item 2'},
  {id: '3', title: 'Item 3'},
];

const renderItem = ({item}) => (
  <View style={{padding: 10}}>
    <Text>{item.title}</Text>
  </View>
);

const MyFlatList = () => (
  <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item.id}
  />
);

export default MyFlatList;
