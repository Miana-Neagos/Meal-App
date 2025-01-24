import { StyleSheet, View } from "react-native"
import { Text } from "react-native-gesture-handler"
import { MealCategories } from "../data/data"

const Meals = () => {
    return (
        <View style={styles.container}>
            <Text>Meals Overview Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})

export default Meals;