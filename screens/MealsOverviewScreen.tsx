import { StyleSheet, View, FlatList } from "react-native";
import { RootStackParamList } from "../navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MealsData, MealCategories } from "../data/data";
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";

// type MealsOverviewScreenProps = {
//     route: RoutePropType<'MealsOverview'>;
// }
type MealsOverviewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "MealsOverview"
>;

const MealsOverviewScreen: React.FC<MealsOverviewScreenProps> = ({ route, navigation }) => {
  const catId = route.params.categoryId;
  const categoryColor = route.params.categoryColor;
  
  const meals = MealsData.filter((meal) => {
    return meal.categoryId.includes(catId);
  });
  
  // useEffect(() => {
  //   const catTitle = MealCategories.find((category) => category.id === catId)?.title
  //   console.log(catTitle);
  
  //   navigation.setOptions({
  //     title: catTitle,
  //   });
  // }, [navigation, catId])

  useLayoutEffect(() => {
    const catTitle = MealCategories.find((category) => category.id === catId)?.title
    console.log(catTitle);
  
    navigation.setOptions({
      title: catTitle,
    });
  }, [navigation, catId])
  

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={(itemData) => <MealItem meal={itemData.item} />}
        // keyExtractor={() =>}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
