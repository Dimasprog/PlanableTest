import { forwardRef } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import useBooleanState from '../../hooks/useBooleanState';
import { styles } from './Input.styles';
import { InputProps } from './Input.types';

const Input = forwardRef<TextInput, InputProps>(
  ({ error, label, startIcon, endIcon, onFocus, onBlur, ...rest }, ref) => {
    const {
      state: isFocus,
      setToTrue: focus,
      setToFalse: blur,
    } = useBooleanState();

    const focusInput: TextInputProps['onFocus'] = e => {
      onFocus?.(e);
      focus();
    };

    const blurInput: TextInputProps['onBlur'] = e => {
      onBlur?.(e);
      blur();
    };

    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          ref={ref}
          {...rest}
          style={[
            styles.textInput,
            isFocus ? styles.activeBorder : styles.defaultBorder,
          ]}
          isFocus={isFocus}
          startIcon={Boolean(startIcon)}
          endIcon={Boolean(endIcon)}
          placeholderTextColor="#9FA4AB"
          onFocus={focusInput}
          onBlur={blurInput}
        />
        {error && <Text style={styles.errorMessage}>{error}</Text>}
      </View>
    );
  },
);

export default Input;
