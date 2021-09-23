import React, { FC } from 'react';

import './Input.css';
import { Props } from './Input.interface';

const Input: FC<Props> = ({
  className = '',
  value,
  id,
  placeholder,
  handleChange,
}): React.ReactElement => {
  return (
    <input
      className={'input ' + className}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      type="text"
      id={id}
    />
  );
};

export default Input;
