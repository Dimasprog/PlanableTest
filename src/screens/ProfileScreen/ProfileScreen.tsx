import { FC } from 'react';
import { Image, SectionList, Text, View } from 'react-native';
import { IMAGES } from '../../assets';
import { styles } from './ProfileScreen.styles';
import SettingsItem from '../../components/SettingsItem';
import { sectionListData } from '../../utils/constants/sectionListData';

const ProfileCard = () => (
  <View style={styles.profileCard}>
    <Image source={IMAGES.avatar} style={styles.avatar} />
    <View>
      <Text style={styles.name}>Terry Jenkins</Text>
      <Text style={styles.email}>terryjenkins@gmail.com</Text>
    </View>
  </View>
);

const ProfileScreen: FC = () => {
  const renderItem = ({ item }) => <SettingsItem {...item} />;

  const renderSectionHeader = ({ section }) => (
    <Text style={styles.sectionTitle}>{section.title}</Text>
  );

  return (
    <View style={styles.root}>
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={sectionListData}
        keyExtractor={item => item.title}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ListFooterComponent={<View style={styles.contentContainerStyle} />}
        ListHeaderComponent={ProfileCard}
      />
    </View>
  );
};

export default ProfileScreen;
