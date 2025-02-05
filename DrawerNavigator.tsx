import { createDrawerNavigator } from "@react-navigation/drawer";
import { colorTheme } from "./colorTheme";
import CategoriesScreen from "./screens/CategoriesScreen";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import FavoritesScreen from "./screens/FavoritesScreen";
import { DrawerParamList } from "./navigation/types";

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: colorTheme.colorBlack,
        drawerActiveBackgroundColor: colorTheme.colorGreen,
        drawerActiveTintColor: colorTheme.colorBlack,
        drawerContentStyle: { backgroundColor: colorTheme.colorLightGrey },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
