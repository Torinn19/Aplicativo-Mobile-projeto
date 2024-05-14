import { StyleSheet } from 'react-native';
import indexhomeScreen from './indexhomeScreen';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    searchBar: {
      margin: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
    },
    title: {
      marginHorizontal: 10,
      marginTop: 20,
      fontSize: 24,
      fontWeight: 'bold',
    },
    category: {
      marginHorizontal: 10,
      fontSize: 18,
    },
    itemContainer: {
      margin: 10,
      alignItems: 'center',
    },
    itemImage: {
      width: 100,
      height: 100,
    },
    itemName: {
      marginTop: 5,
    },
  });
  
  export default indexhomeScreen;