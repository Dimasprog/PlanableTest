import { NavigationContainer, Theme } from '@react-navigation/native';
import UserStack from './src/navigation/UserStack';

const App = () => {
  return (
    <NavigationContainer
      theme={
        {
          colors: {
            primary: '#232426',
            background: 'white',
            text: '#232426',
            border: '#cacbce',
          },
        } as Theme
      }>
      <UserStack />
    </NavigationContainer>
  );
};

export default App;
