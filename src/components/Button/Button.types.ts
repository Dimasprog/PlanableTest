import { PressableProps, StyleProp, TextStyle } from 'react-native';

export type ButtonProps = PressableProps & {
  title: string;
  titleStyle?: StyleProp<TextStyle>;
};
