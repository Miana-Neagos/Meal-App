import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { RootStackParamList } from "../navigation/types";
import { MealsData } from "../data/data";
import { useContext, useEffect } from "react";
import QuickInfo from "../components/MealDetail/QuickInfo";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { colorTheme } from "../colorTheme";
import IconButton from "../components/IconButton";
// import { FavoritesContext } from "../store/context/favoritesContext";
import { useAppSelector, useAppDispatch } from "../store/redux/hooks";
import { addFavorites, removeFavorites } from "../store/redux/favorites";

type MealDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "MealDetails"
>;

const MealDetailsScreen: React.FC<MealDetailsScreenProps> = ({ route, navigation }) => {

  const favMealIds = useAppSelector((state) => state.favoriteMeals.ids);
  const dispatch = useAppDispatch();
  // const favsContext = useContext(FavoritesContext);
  const { mealId } = route.params;

  const selectedMeal = MealsData.find((meal) => meal.id === mealId);
  const mealIsFav = favMealIds.includes(mealId);
  
  const manageFavs = () => {
    mealIsFav? dispatch(removeFavorites({id: mealId})) : dispatch(addFavorites({id: mealId}));
  }

  useEffect(() => {
    navigation.setOptions({title: selectedMeal?.title || "Meal Details", headerRight: () => {
     return  <IconButton icon={mealIsFav ? 'heart' : 'heart-outline'} color={colorTheme.colorBlack} onPress={manageFavs}/>
    } });
  }, [selectedMeal, navigation, mealIsFav]);

  return (
    <ScrollView
      style={styles.rootContainer}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.imgContainer}>
        <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
      </View>
      <QuickInfo
        details={{
          duration: selectedMeal?.duration,
          complexity: selectedMeal?.complexity,
          affordability: selectedMeal?.affordability,
        }}
      ></QuickInfo>
      <View style={styles.sectionContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal?.ingredients} />
      </View>
      <View style={styles.sectionContainer}>
        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal?.steps} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginBottom: 20,
  },
  contentContainer: {
    alignItems: "center",
    gap: 10,
  },
  imgContainer: {
    margin: 8,
    width: "90%",
    alignItems: "center",
  },
  image: {
    padding: 3,
    width: "100%",
    height: 350,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
    color: colorTheme.colorGrey,
  },
  sectionContainer: {
    width: "100%",
    gap: 5,
  },
});

export default MealDetailsScreen;
