import { FC } from 'react';
import { Text, View } from 'react-native';
import { HeaderProps } from './Header.types';

const Header: FC<HeaderProps> = ({ test }) => {
  return (
    <View>
      <Text>{test}</Text>
    </View>
  );
};

export default Header;
