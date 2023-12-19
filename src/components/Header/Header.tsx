import { FC } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { StackHeaderProps } from '@react-navigation/stack';
import { ICONS } from '../../assets';
import { styles } from './Header.styles';
import { useNavigation } from '@react-navigation/native';
import { UserScreenProps } from '../../screens/UserScreen';

const Header: FC<StackHeaderProps> = props => {
  const { goBack } = useNavigation<UserScreenProps['navigation']>();

  return (
    <View style={styles.header}>
      <Pressable onPress={goBack}>
        <Image source={ICONS.xMark} style={styles.crossIcon} />
      </Pressable>
      <Text style={styles.title}>{props.options.title}</Text>
      <View style={styles.crossIcon} />
    </View>
  );
};

export default Header;
