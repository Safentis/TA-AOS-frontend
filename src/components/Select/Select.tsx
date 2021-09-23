import React, { FC } from 'react';

import './Select.css';
import { Props } from './Select.interface';

const Select: FC<Props> = ({
  className = '',
  options,
  onChange,
  value,
  name,
  id,
}): React.ReactElement => {
  return (
    <select
      className={`select ${className}`}
      name={name}
      id={id}
      onChange={onChange}
    >
      {options.map((value: string, index: number) => (
        <option value={value} key={index}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default Select;
