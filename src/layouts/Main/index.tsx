import React, { FC } from 'react';

import './index.css';
import { Props } from './index.interface';

const Main: FC<Props> = ({
  children,
  className = '',
}): React.ReactElement => {
  return (
    <main className={`main ${className}`}>
      <div className="main__inner">{children}</div>
    </main>
  );
};

export default Main;
