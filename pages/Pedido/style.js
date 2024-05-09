import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#444',
    alignSelf: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  itemName: {
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#008000',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderButton: {
    backgroundColor: '#0000ff',
    padding: 15,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default styles;