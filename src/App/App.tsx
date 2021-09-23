import React, { FC } from 'react';

import Header from '../layouts/Header';
import Aside from '../layouts/Aside';
import Main from '../layouts/Main';
import MainRoutes from './App.routes';

import './App.css';
import { Props } from './App.interface';

const App: FC<Props> = ({}): React.ReactElement => {
  return (
    <div className="application">
      <div className="application__inner">
        <Header className="application__header" />
        <Aside className="application__aside" />
        <Main className="application__main">
          <MainRoutes />
        </Main>
      </div>
    </div>
  );
};

export default App;
