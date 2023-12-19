import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#e4e5e7',
    padding: 6,
    borderRadius: 12,
    marginRight: 12,
  },
  icon: {
    resizeMode: 'contain',
    width: 24,
    height: 24,
  },
  chevronRight: {
    width: 20,
    height: 20,
  },
  title: {
    flex: 1,
    color: '#232426',
    fontSize: 15,
    lineHeight: 20,
  },
});
