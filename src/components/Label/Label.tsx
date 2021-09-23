import React, { FC } from 'react';

import './Label.css';
import { Props } from './Label.interface';

const Label: FC<Props> = ({
  children,
  className = '',
  htmlFor,
  content,
}): React.ReactElement => {
  return (
    <label className={'label ' + className} htmlFor={htmlFor}>
      <span className="label__content">{content}</span>
      {children}
    </label>
  );
};

export default Label;
