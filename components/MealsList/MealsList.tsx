import { FlatList, View, StyleSheet } from "react-native"
import MealItem from "./MealItem";
import Meal from "../../models/meals";

type MealsListProps = {
    mealsData: Meal[],
}

const MealsList:React.FC<MealsListProps> = ({mealsData}) => {  
    return (
        <View style={styles.container}>
        <FlatList
          data={mealsData}
          renderItem={(itemData) => <MealItem meal={itemData.item} />}
        ></FlatList>
      </View>
  
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });

export default MealsList;