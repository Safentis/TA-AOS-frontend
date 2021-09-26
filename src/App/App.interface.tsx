export interface Props {}
export interface Entry {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
}
export interface GlobalContent {
  entries: Entry[];
  numberOfPages: number;
  numberOfItems: number;
  currentPage: number;
  filter: Filter;
  handlePagination: (page: number) => void;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

export interface Filter {
  status: string;
  gender: string;
  search: string;
}
