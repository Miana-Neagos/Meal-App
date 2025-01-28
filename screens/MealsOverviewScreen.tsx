import { StyleSheet, View, Text } from "react-native"
import { RootStackParamList } from "../navigation/types"
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// type MealsOverviewScreenProps = {
//     route: RoutePropType<'MealsOverview'>;
// }
type MealsOverviewScreenProps = NativeStackScreenProps<RootStackParamList, 'MealsOverview'>;

const MealsOverviewScreen:React.FC<MealsOverviewScreenProps> = ({route}) => {
    const catId = route.params.categoryId;
    const categoryColor = route.params.categoryColor;
    
    return (
        <View style={styles.container}>
            <Text>Category Id: {catId}</Text>
            <Text>Category Color: {categoryColor}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})

export default MealsOverviewScreen;