import { RootStackParamList } from "../navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MealsData, MealCategories } from "../data/data";
import { useEffect, useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

type MealsOverviewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "MealsOverview"
>;

const MealsOverviewScreen: React.FC<MealsOverviewScreenProps> = ({ route, navigation }) => {
  
  const {id} = route.params.category
  const meals = MealsData.filter((meal) => {
    return meal.categoryId.includes(id);
  });
  
  // useEffect(() => {
  //   const catTitle = MealCategories.find((category) => category.id === catId)?.title
  //   console.log(catTitle);
  
  //   navigation.setOptions({
  //     title: catTitle,
  //   });
  // }, [navigation, catId])

  useLayoutEffect(() => {
    const catTitle = MealCategories.find((category) => category.id === id)?.title
  
    navigation.setOptions({
      title: catTitle,
    });
  }, [navigation, id])
  

  return (
    <MealsList mealsData={meals}/>
  );
};

export default MealsOverviewScreen;
