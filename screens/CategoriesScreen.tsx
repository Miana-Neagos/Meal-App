import { View, Text, FlatList } from "react-native";
import { MealCategories } from "../data/data";
import CategoryGridTile from "../components/CategoryGridTile";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerParamList, RootStackParamList } from "../navigation/types";
import MealCategory from "../models/meal_category";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { CompositeScreenProps } from "@react-navigation/native";

type CategoriesScreenProp = CompositeScreenProps<
DrawerScreenProps<DrawerParamList, 'Categories'>, NativeStackScreenProps<RootStackParamList, 'MealsOverview'>>;

const CategoriesScreen: React.FC<CategoriesScreenProp> = ({ navigation, route }) => {  
  
  const onPressHandler = (category: MealCategory) => {
    navigation.navigate("MealsOverview", { category });
  };
  return (
    <View>
      <FlatList
        data={MealCategories}
        renderItem={(itemData) => (
          <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={() =>
              onPressHandler(itemData.item)
            }
          />
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>No categories available.</Text>}
        numColumns={2}
      ></FlatList>
    </View>
  );
};

export default CategoriesScreen;
