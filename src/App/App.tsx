import React, { FC, useEffect, useRef, useState } from 'react';

import Header from '../layouts/Header';
import Aside from '../layouts/Aside';
import Main from '../layouts/Main';
import MainRoutes from './App.routes';

import './App.css';
import { Entry, Filter, GlobalContent, Props } from './App.interface';
import { GlobalContext } from './App.context';

const App: FC<Props> = ({}): React.ReactElement => {
  //* Main state of application
  const [entries, setEntries] = useState<Entry[]>([]);
  const [filter, setFilter] = useState<Filter>({
    status: '',
    gender: '',
    search: '',
  });

  //* Pagination
  const [numberOfPages, setNumberOfPages] = useState<number>(0);
  const [numberOfItems, setNumberOfItems] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const handlePagination = (page: number): void => {
    setCurrentPage(page);
  }

  useEffect(() => {
    (async () => {
      try {
        const req = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${filter.search}&status=${filter.status}&gender=${filter.gender}`);
        const ans = await req.json();
        
        if (ans.error) {
          setEntries([])
          setNumberOfPages(0);
          setNumberOfItems(0);
        } else {
          setEntries(ans.results)
          setNumberOfPages(ans.info.pages);
          setNumberOfItems(ans.info.count);
        }
      } catch (err) {
        console.error('Error with request to api');
        console.error(err);
      } 
    })();
  }, [filter, currentPage])

  //* Scroll to top
  useEffect(() => {
    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
      }
    };

    scrollToTop();
  }, [currentPage]);

  const value: GlobalContent = {
    handlePagination,
    numberOfPages,
    numberOfItems, 
    currentPage, 
    setFilter,
    entries, 
    filter, 
  };

  return (
    <GlobalContext.Provider value={value}>
      <div className="application">
        <div className="application__inner">
          <Header className="application__header" />
          <Aside className="application__aside" />
          <Main className="application__main">
            <MainRoutes />
          </Main>
        </div>
      </div>
    </GlobalContext.Provider>
  );
};

export default App;
