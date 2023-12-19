import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { UserStackParamList } from '../../navigation/UserStack/UserStack.types';

export type UserScreenProps = NativeStackScreenProps<
  UserStackParamList,
  'UserScreen'
>;
