import React from 'react';
import renderer from 'react-test-renderer';
import ButtonComponent from '../../../src/components/ButtonComponent';

describe('ButtonComponent', () => {
  it('calls the onClick function when the button is clicked', () => {
    const onClickMock = jest.fn();
    const component = renderer.create(
      <ButtonComponent onClick={onClickMock} />,
    );
    const buttonInstance = component.root.findByProps({testID: 'button2'});
    buttonInstance.props.onPress(); // Call the onClick prop
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
