import React from 'react';
import renderer, {ReactTestRenderer, act, create} from 'react-test-renderer';
import TextInputComponent from '../../../src/components/TextInputComponent';

describe('Group Text Input Props', () => {
  const placeholder = 'Enter email id';
  const defaultValue = 'Initial value';

  let component;

  // act used when component re-rendering/update with state.
  act(() => {
    component = renderer.create(
      <TextInputComponent
        placeholder={placeholder}
        defaultValue={defaultValue}
      />,
    );
  });

  const textInputInstance = component.root.findByProps({
    testID: 'myTextInput',
  });

  test('Check with onChangeText props', () => {
    // let component: ReactTestRenderer | undefined;
    // act is used to update component/ rerender the component with it's state.

    act(() => {
      textInputInstance.props.onChangeText(defaultValue);
    });

    const updatedValue = textInputInstance.props.value;

    expect(updatedValue).toEqual(defaultValue);
  });

  test('Check with placeholder props', () => {
    let placeholderString = textInputInstance.props.placeholder;
    expect(placeholderString).toEqual(placeholder);
  });

  test('Check with default props', () => {
    let defaultV = textInputInstance.props.defaultValue;
    expect(defaultV).toEqual(defaultValue);
  });
});
