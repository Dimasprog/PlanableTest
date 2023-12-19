import { createStackNavigator } from '@react-navigation/stack';
import { NameAndEmailScreen, ProfileScreen, UserScreen } from '../../screens';
import { UserStackParamList } from './UserStack.types';
import Header from '../../components/Header';

const Stack = createStackNavigator<UserStackParamList>();

const UserStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="UserScreen"
      screenOptions={{
        header: Header,
      }}>
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{ presentation: 'modal', headerShown: false }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ presentation: 'modal', title: 'Profile' }}
      />
      <Stack.Screen
        name="NameAndEmailScreen"
        component={NameAndEmailScreen}
        options={{ presentation: 'modal', title: 'Name & Email' }}
      />
    </Stack.Navigator>
  );
};

export default UserStack;
