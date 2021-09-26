import React, { FC, useState } from 'react';
import { Pagination } from 'antd';

import HomeFilters from './HomeFilters/HomeFilters';
import HomeContent from './HomeContent/HomeContent';

import './Home.css';
import { Props } from './Home.interface';
import { useGlobalContext } from '../../App/App.context';

// prettier-ignore
const Home: FC<Props> = ({}): React.ReactElement => {
  const { 
    handlePagination, 
    numberOfPages, 
    numberOfItems,
    currentPage, 
  } = useGlobalContext();

  return (
    <div className="home">
      <HomeFilters className="home__filters" />
      <HomeContent className="home__content" />
      {numberOfPages ? (
        <Pagination
          className="home__pagination"
          current={currentPage}
          total={numberOfItems}
          onChange={handlePagination}
          showSizeChanger={false}
          defaultPageSize={20}
          defaultCurrent={1}
        />) : (
          null
        )
      }
    </div>
  );
};

export default Home;
