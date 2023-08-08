import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Passing, { Image2  } from './components/Passing.js'
import ToggleButton from './components/TodoItem';




export default function App() {
  return (
   
    <View style={styles.container}>

    
    <View style={styles.innerContainer}>
      <Passing ours='hellow2'></Passing>
      </View>
      <View style={styles.innerContainer}>
    <ToggleButton/>
      <Image2></Image2>
      </View>
    </View>
    
  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00DCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/ 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00DCFF',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#0EEA28'
  },
  innerContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'blue'
  },
});
