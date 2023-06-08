import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
const ButtonComponent = ({onClick}) => {
  return (
    <View>
      <TouchableOpacity testID="button1">
        <Text>Click me</Text>
      </TouchableOpacity>

      <TouchableOpacity
        testID="button2"
        onPress={() => {
          onClick();
        }}>
        <Text>Click me 1</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ButtonComponent;
