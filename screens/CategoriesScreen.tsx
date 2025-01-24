import { View, Text, FlatList } from "react-native";
import { MealCategories } from "../data/data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = () => {
    return (
    <View>
      <FlatList
        data={MealCategories}
        renderItem={(itemData) => (
          <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
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
