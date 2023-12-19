import { FC } from 'react';
import { Text, View } from 'react-native';
import { SettingsItemProps } from './SettingsItem.types';

const SettingsItem: FC<SettingsItemProps> = ({ test }) => {
  return (
    <View>
      <Text>{test}</Text>
    </View>
  );
};

export default SettingsItem;
