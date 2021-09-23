import React, { FC } from 'react';

import Label from '../../components/Label/Label';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';

import './Home.css';
import { Props } from './Home.interface';
import { Links } from '../../utils/links';

const Home: FC<Props> = ({}): React.ReactElement => {
  return (
    <div className="home">
      <div className="filter home__filter">
        <Label htmlFor="search" content="search">
          <Input
            className="search filter__search"
            placeholder="Type here..."
            handleChange={() => {}}
            id="search"
            value=""
          />
        </Label>

        <Label htmlFor="status" content="status">
          <Select
            className="select filter__select"
            options={['alive', 'dead']}
            onChange={() => {}}
            value={{}}
            name="status"
            id="status"
          />
        </Label>

        <Label htmlFor="gender" content="gender">
          <Select
            className="select filter__select"
            options={['male', 'female']}
            onChange={() => {}}
            value={{}}
            name="gender"
            id="gender"
          />
        </Label>
      </div>
      <div className="content home__content"></div>
    </div>
  );
};

export default Home;
