import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FavoritesContext } from "../store/favoritesContext";
import MealsList from "../components/MealsList/MealsList";
import { MealsData } from "../data/data";
import { colorTheme } from "../colorTheme";

const FavoritesScreen = () => {
  const favsContext = useContext(FavoritesContext);
  const favMeals = MealsData.filter((meal) => favsContext.ids.includes(meal.id));

  return (
    favMeals.length > 0 ? <MealsList mealsData={favMeals} /> : <View style={styles.container}><Text style={styles.favText}>No favorites added</Text></View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
        alignItems: 'center',
    },
    favText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colorTheme.colorGrey,
    },
})

export default FavoritesScreen;
