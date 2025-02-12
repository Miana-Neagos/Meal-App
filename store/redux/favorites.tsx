import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FavoritesState = {
    ids: string[],
};

type FavoritesPayload = {
    id: string,
}

const initialState: FavoritesState = {
    ids: [],
}

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorites: (state, action: PayloadAction<FavoritesPayload>) => {
           state.ids.push(action.payload.id) 
        },
        removeFavorites: (state, action: PayloadAction<FavoritesPayload>) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1) 
        },
    }
});

export const addFavorites = favoritesSlice.actions.addFavorites;
export const removeFavorites = favoritesSlice.actions.removeFavorites;
export default favoritesSlice.reducer;
