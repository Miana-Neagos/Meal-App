import { View, Text, FlatList } from "react-native";
import { MealCategories } from "../data/data";
import CategoryGridTile from "../components/CategoryGridTile";

type CategoriesScreenProp = {
  navigation: any;
}

const CategoriesScreen:React.FC<CategoriesScreenProp> = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('MealsOverview');
  }
    return (
    <View>
      <FlatList
        data={MealCategories}
        renderItem={(itemData) => (
          <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={onPressHandler}
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
