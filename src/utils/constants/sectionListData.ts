import { ICONS } from '../../assets';
import { SettingsSectionList } from '../../screens/ProfileScreen';
import { SettingsItemProps } from '../../components/SettingsItem';

const pkg = require('./../../../package.json');

type SettingsSectionList = {
  title: string;
  data: SettingsItemProps[];
};

export const sectionListData: SettingsSectionList[] = [
  {
    title: 'Profile',
    data: [
      {
        title: 'Name & Email',
        icon: ICONS.user,
        screenName: 'NameAndEmailScreen',
      },
      { title: 'Password', icon: ICONS.key },
    ],
  },
  {
    title: 'Preferences',
    data: [
      { title: 'Time & Region', icon: ICONS.mapPin },
      { title: 'Notification', icon: ICONS.bell },
      { title: 'Privacy & Security', icon: ICONS.language },
      { title: 'Appearance', icon: ICONS.paintBrush },
    ],
  },
  {
    title: 'More',
    data: [
      { title: 'Contact Support', icon: ICONS.chat },
      { title: 'Terms of Service', icon: ICONS.documentCheck },
      { title: 'Privacy Policy', icon: ICONS.shieldCheck },
      { title: `App Version - ${pkg.version}`, icon: ICONS.squareTriplet },
    ],
  },
  {
    title: '',
    data: [
      {
        title: 'Log Out',
        icon: ICONS.exitApp,
        style: {
          iconBackgroundColor: '#ffe6e6',
          titleColor: '#FF4D4F',
        },
      },
    ],
  },
];
