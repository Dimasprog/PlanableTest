import { FC } from 'react';
import { Pressable, Text } from 'react-native';
import { ButtonProps } from './Button.types';
import { styles } from './Button.styles';

const Button: FC<ButtonProps> = ({ title, disabled, titleStyle, ...rest }) => {
  return (
    <Pressable
      {...rest}
      style={
        rest.style || [styles.saveButton, disabled && styles.disabledButton]
      }
      disabled={disabled}>
      <Text
        style={
          titleStyle || [
            styles.buttonTitle,
            disabled && styles.disabledButtonTitle,
          ]
        }>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
