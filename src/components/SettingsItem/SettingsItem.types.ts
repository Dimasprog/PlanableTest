import { ImageSourcePropType } from 'react-native';
import { UserStackParamList } from '../../navigation/UserStack/UserStack.types';

export type SettingsItemProps = {
  title: string;
  icon: ImageSourcePropType;
  style?: Partial<{
    iconBackgroundColor: string;
    titleColor: string;
  }>;
  screenName?: UserStackParamList;
};
