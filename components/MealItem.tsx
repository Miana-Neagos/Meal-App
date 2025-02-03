import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  Platform,
} from "react-native";
import Meal from "../models/meals";
import { colorTheme } from "../colorTheme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type MealItemProps = {
  meal: Meal;
};

const MealItem: React.FC<MealItemProps> = ({ meal }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    
  const onPressHandler = () => {
    navigation.navigate("MealDetails", { mealId: meal.id });
  };

  return (
    <View style={styles.mealITem}>
      <Pressable
        android_ripple={{ color: colorTheme.colorLightGrey }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={() => onPressHandler()} 
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: meal.imageUrl }} style={styles.image} />
          <View>
            <Text style={styles.title}>{meal.title}</Text>
          </View>
          <View style={styles.extraInfo}>
            <Text>{meal.duration}</Text>
            <Text>{meal.complexity}</Text> 
            <Text>{meal.affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealITem: {
    backgroundColor: colorTheme.colorWhite,
    borderRadius: 10,
    gap: 8,
    margin: 15,
    elevation: 4,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.35,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    gap: 3,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  extraInfo: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  buttonPressed: {
    opacity: 0.75,
  },
});

export default MealItem;
