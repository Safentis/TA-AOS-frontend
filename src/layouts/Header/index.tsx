import React, { FC } from 'react';

import './index.css';
import { Props } from './index.interface';

const Header: FC<Props> = ({
  className = '',
}): React.ReactElement => {
  return (
    <header className={`header ${className}`}>
      <div className="header__inner">
        <h2 className="header__title">Rick and Morty</h2>
      </div>
    </header>
  );
};

export default Header;
