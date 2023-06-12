import React from 'react';
import {FlatList, Text} from 'react-native';
import renderer from 'react-test-renderer';

const data = [
  {id: '1', title: 'Item 1'},
  {id: '2', title: 'Item 2'},
  {id: '3', title: 'Item 3'},
];

test('renders FlatList with correct data', () => {
  const component = renderer.create(
    <FlatList
      data={data}
      renderItem={({item}) => <Text>{item.title}</Text>}
      keyExtractor={item => item.id}
    />,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
