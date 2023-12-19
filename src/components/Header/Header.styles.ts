import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderBottomColor: '#cacbce',
    borderBottomWidth: 1,
  },
  crossIcon: {
    resizeMode: 'contain',
    width: 24,
    height: 24,
  },
  title: {
    color: '#232426',
    fontWeight: '600',
    fontSize: 17,
  },
});
