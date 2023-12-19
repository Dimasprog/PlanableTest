import { FC } from 'react';
import { Pressable, SafeAreaView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserScreenProps } from './UserScreen.types';
import { styles } from './UserScreen.styles';

const UserScreen: FC = () => {
  const navigation = useNavigation<UserScreenProps['navigation']>();

  return (
    <SafeAreaView style={styles.root}>
      <Pressable onPress={() => navigation.navigate('ProfileScreen')}>
        <Text>Open Profile Screen</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default UserScreen;
