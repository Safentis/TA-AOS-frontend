import { createContext, useContext } from 'react';
import { GlobalContent } from './App.interface';

export const GlobalContext = createContext<GlobalContent>({
  entries: [],
  numberOfPages: 0,
  numberOfItems: 0,
  currentPage: 1,
  handlePagination: () => {},
  filter: {
    status: "",
    gender: "",
    search: "",
  },
  setFilter: () => {}
});

export const useGlobalContext = () => useContext(GlobalContext);
