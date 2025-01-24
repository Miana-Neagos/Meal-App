import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MealCategories, MealsData } from './data/data';

export default function App() {
  // console.log('MealsData: ', MealsData);
  // console.log('Category Data: ', MealCategories);
  
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{color: '#fff'}}>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
