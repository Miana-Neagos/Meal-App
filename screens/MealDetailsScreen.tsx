import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { RootStackParamList } from "../navigation/types";
import { MealsData } from "../data/data";
import { useEffect } from "react";
import QuickInfo from "../components/MealDetail/QuickInfo";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

type MealDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "MealDetails"
>;

const MealDetailsScreen: React.FC<MealDetailsScreenProps> = ({ route, navigation }) => {
  const { mealId } = route.params;

  const selectedMeal = MealsData.find((meal) => meal.id === mealId);

  useEffect(() => {
    navigation.setOptions({ title: selectedMeal?.title || "Meal Details" });
  }, [selectedMeal, navigation]);

  return (
    <ScrollView style={styles.rootContainer} contentContainerStyle={styles.contentContainer}>
      <View>
        <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal?.title}</Text>
      </View>
      <View>
        <QuickInfo
          details={{
            duration: selectedMeal?.duration,
            complexity: selectedMeal?.complexity,
            affordability: selectedMeal?.affordability,
          }}
        ></QuickInfo>
        <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal?.ingredients}/>
      </View>
      <View>
        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal?.steps}/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  contentContainer: {
    alignItems:'center',
    width: '100%',
    padding: 16,
    // justifyContent: 'center',    
  },
  image: {
    padding: 3,
    width: "80%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    // textAlign: 'center',
  }
});

export default MealDetailsScreen;
