import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "../navigation/types";
import { MealsData } from "../data/data";
import { useEffect } from "react";

type MealDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'MealDetails'>

const MealDetailsScreen:React.FC<MealDetailsScreenProps> = ({route, navigation}) => {
  const {mealId} = route.params;
  console.log({mealId});

  const selectedMeal = MealsData.find((meal) => meal.id === mealId)
  console.log({selectedMeal});

  useEffect(() => {
    navigation.setOptions({title: selectedMeal?.title || 'Meal Details'})
  },[selectedMeal, navigation])
  

  return (
    <View>
      <Text>{selectedMeal?.steps}</Text>
    </View>
  );
};

const styles = StyleSheet.create({

})

export default MealDetailsScreen;
