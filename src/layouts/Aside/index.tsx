import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';

import './index.css';
import { Props, Link as LinkInterface } from './index.interface';
import { Pathes } from '../../utils/pathes';

const Aside: FC<Props> = ({ className = '' }): React.ReactElement => {
  const { pathname } = useLocation();

  //* Links array, that is template for components
  const links: LinkInterface[] = [
    { link: 'Home', to: Pathes.PATH_MAIN, icon: faHome },
    { link: 'About', to: Pathes.PATH_ABOUT, icon: faUser },
  ];

  // prettier-ignore
  const content = links.map(
    ({ link, to, icon }: LinkInterface, index: number) => (
      <li className="nav__item" key={index}>
        <Link className={`nav__link ${pathname === to ? "nav__link_active" : ""}`} to={to}>
          {link}
          <FontAwesomeIcon 
            className={`nav__icon ${pathname === to ? "nav__icon_active" : ""}`} 
            icon={icon} 
          />
        </Link>
      </li>
    ),
  );

  return (
    <aside className={`aside ${className}`}>
      <div className="aside__inner">
        <nav className="nav aside__nav">
          <ul className="nav__list">{content}</ul>
        </nav>
      </div>
    </aside>
  );
};

export default Aside;
