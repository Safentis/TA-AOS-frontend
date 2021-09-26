import React, { FC } from 'react';
import { Select, Input } from 'antd';

import Label from '../../../components/Label/Label';

import './HomeFilters.css';
import { Props } from './HomeFilters.interface';
import { Filter } from '../../../App/App.interface';
import { useGlobalContext } from '../../../App/App.context';

const HomeFilters: FC<Props> = ({
  className = '',
}): React.ReactElement => {
  const { Option } = Select;
  const { filter, setFilter, handlePagination } = useGlobalContext();

  //* ------------------------------------------------------
  //* Hendlers of state
  const handleSearch = (event: React.ChangeEvent): void => {
    const newState: Filter = { ...filter };

    //* In this case, we are getting value of input
    const target = event.target as HTMLInputElement;
    const value: string = target.value;

    //* Set new value to state
    newState.search = value;

    //* After we set new state
    setFilter(newState);
    handlePagination(1);
  };

  const handleSelect = (value: string, options: any): void => {
    const newState: Filter = { ...filter };
    const selectCategory: string = options.title;
    const valueOfSelect: string = value !== 'none' ? value : '';
    //* In this case, we are setting value of select
    //* in newState object
    if (selectCategory === 'status') {
      newState.status = valueOfSelect;
    } else {
      newState.gender = valueOfSelect;
    }

    setFilter(newState);
    handlePagination(1);
  };

  //* ------------------------------------------------------
  //* Content
  const status: string[] = ['alive', 'dead', 'unknown', 'none'];
  const gender: string[] = [
    'male',
    'female',
    'genderless',
    'unknown',
    'none',
  ];

  const STATUS_OPTIONS = status.map((value: string) => (
    <Option key={value} value={value} title="status">
      {value}
    </Option>
  ));

  const GENDER_OPTIONS = gender.map((value: string) => (
    <Option key={value} value={value} title="gender">
      {value}
    </Option>
  ));

  return (
    <div className={`filters ${className}`}>
      <Label className="filters__label" content="search">
        <Input
          className="search filters__search"
          placeholder="Type here..."
          onChange={handleSearch}
          id="search"
          value={filter.search}
        />
      </Label>

      <Label className="filters__label" content="status">
        <Select
          className="select filters__select"
          onChange={handleSelect}
          placeholder="Status"
          defaultValue="none"
        >
          {STATUS_OPTIONS}
        </Select>
      </Label>

      <Label className="filters__label" content="gender">
        <Select
          className="select filters__select"
          onChange={handleSelect}
          placeholder="Gender"
          defaultValue="none"
        >
          {GENDER_OPTIONS}
        </Select>
      </Label>
    </div>
  );
};

export default HomeFilters;
