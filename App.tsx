import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import DrawerNavigator from "./DrawerNavigator";
import { RootStackParamList } from "./navigation/types";
// import FavoritesContextProvider from "./store/context/favoritesContext";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTitleAlign: "center",
            }}
          >
            <Stack.Screen
              name="MealCategories"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            ></Stack.Screen>
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            ></Stack.Screen>
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 5,
  },
})

