import { createStackNavigator } from '@react-navigation/stack';
import { NameAndEmailScreen, ProfileScreen, UserScreen } from '../../screens';

type UserStackParamList = {
  UserScreen: undefined;
  ProfileScreen: undefined;
  NameAndEmailScreen: undefined;
};

const Stack = createStackNavigator<UserStackParamList>();

const UserStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{ presentation: 'modal' }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ presentation: 'modal' }}
      />
      <Stack.Screen
        name="NameAndEmailScreen"
        component={NameAndEmailScreen}
        options={{ presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
};

export default UserStack;
