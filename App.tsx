import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { RootStackParamList } from "./navigation/types";
import { colorTheme } from "./colorTheme";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: colorTheme.colorDarkBrown },
            headerTintColor: colorTheme.colorLightGrey,
            contentStyle: { backgroundColor: colorTheme.colorDarkBrown },
          }}
        >
          <Stack.Screen
            name="MealCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="MealsData"
            component={MealsOverviewScreen}
            // options={{ title: "Overview" }}
            // options={({route}) => {
            //   const catId = route.params.categoryId
            //   return {
            //     title: catId
            //   }
            // }}
          ></Stack.Screen>
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
