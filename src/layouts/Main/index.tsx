import React, { FC } from 'react';

import './index.css';
import { Props } from './index.interface';

const Main: FC<Props> = ({
  children,
  className = '',
}): React.ReactElement => {
  return (
    <main className={`main ${className}`}>
      {children}
    </main>
  );
};

export default Main;
