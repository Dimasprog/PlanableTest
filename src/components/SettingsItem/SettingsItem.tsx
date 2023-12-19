import { FC } from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import { SettingsItemProps } from './SettingsItem.types';
import { ICONS } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { UserScreenProps } from '../../screens/UserScreen';
import { styles } from './SettingsItem.styles';

const SettingsItem: FC<SettingsItemProps> = ({
  icon,
  title,
  screenName,
  style,
}) => {
  const { navigate } = useNavigation<UserScreenProps['navigation']>();

  const onItemPress = () => {
    if (!screenName) {
      return;
    }

    navigate(screenName);
  };

  return (
    <TouchableHighlight
      underlayColor="#f2f2f3"
      style={styles.root}
      onPress={onItemPress}>
      <>
        <View
          style={[
            styles.iconContainer,
            {
              backgroundColor:
                style?.iconBackgroundColor ||
                styles.iconContainer.backgroundColor,
            },
          ]}>
          <Image style={styles.icon} source={icon} />
        </View>
        <Text
          numberOfLines={1}
          style={[styles.title, { color: style?.titleColor }]}>
          {title}
        </Text>
        {title !== 'Log Out' && (
          <Image style={styles.chevronRight} source={ICONS.chevronRight} />
        )}
      </>
    </TouchableHighlight>
  );
};

export default SettingsItem;
