import { View, Text, FlatList } from "react-native";
import { MealCategories } from "../data/data";
import CategoryGridTile from "../components/CategoryGridTile";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type CategoriesScreenProp = NativeStackScreenProps<RootStackParamList, 'MealCategories'>;

const CategoriesScreen:React.FC<CategoriesScreenProp> = ({navigation}) => {
  const onPressHandler = (categoryId:string, categoryColor: string) => {
    navigation.navigate("MealsOverview", { categoryId, categoryColor });
  }
    return (
    <View>
      <FlatList
        data={MealCategories}
        renderItem={(itemData) => (
          <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={() => onPressHandler(itemData.item.id, itemData.item.color)}
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
