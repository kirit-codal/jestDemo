import React, {useState} from 'react';
import {TextInput} from 'react-native';

const TextInputComponent = ({placeholder, defaultValue}) => {
  const [value, setValue] = useState('');

  const onChangeText = text => {
    setValue(text);
  };

  return (
    <TextInput
      placeholder={placeholder}
      defaultValue={defaultValue}
      testID="myTextInput" // Used for identifying the TextInput in tests
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default TextInputComponent;
