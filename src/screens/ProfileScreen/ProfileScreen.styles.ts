import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 16,
    paddingBottom: 0,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 8,
  },
  avatar: {
    resizeMode: 'contain',
    width: 64,
    height: 64,
    marginRight: 12,
  },
  name: {
    color: '#232426',
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 28,
    marginBottom: 6,
  },
  email: {
    color: '#878C91',
    fontSize: 17,
    lineHeight: 22,
  },
  sectionTitle: {
    textTransform: 'uppercase',
    paddingTop: 16,
    paddingBottom: 4,
    backgroundColor: 'white',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 2,
    color: '#878C91',
  },
  contentContainerStyle: {
    backgroundColor: 'tomato',
    marginBottom: 20,
  },
});
