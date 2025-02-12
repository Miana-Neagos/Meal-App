import { createContext, ReactNode, useState } from "react";

type FavoritesContextProps = {
  ids: string[];
  addFavorites: (id: string) => void;
  removeFavorites: (id: string) => void;
};

export const FavoritesContext = createContext<FavoritesContextProps>({
  ids: [],
  addFavorites: (id) => {},
  removeFavorites: (id) => {},
});

type FavoritesContextProviderProps = {
  children: ReactNode;
};

const FavoritesContextProvider: React.FC<FavoritesContextProviderProps> = ({ children}) => {
  const [favoriteIds, setFavorites] = useState<string[]>([]);

  const addFavorites = ( id: string) => {
    setFavorites(currentFavs => [...currentFavs, id] );
  };

  const removeFavorites = ( id: string) => {
    setFavorites(currentFavs => currentFavs.filter(mealId => mealId !== id));
  };

  const contextValue: FavoritesContextProps = {
    ids: favoriteIds,
    addFavorites,
    removeFavorites,
  }
  return (
    <FavoritesContext.Provider value={contextValue}>{children}</FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
