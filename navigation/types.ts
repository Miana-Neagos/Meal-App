import MealCategory from "../models/meal_category";
import Meal from "../models/meals";

export type CategoryParam = {category: MealCategory}

export type RootStackParamList = {
    MealCategories: CategoryParam;
    MealsData: CategoryParam;
    MealDetails: {mealId : string};
};


