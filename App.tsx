import { NavigationContainer } from '@react-navigation/native';
import UserStack from './src/navigation/UserStack';

const App = () => {
  return (
    <NavigationContainer>
      <UserStack />
    </NavigationContainer>
  );
};

export default App;
