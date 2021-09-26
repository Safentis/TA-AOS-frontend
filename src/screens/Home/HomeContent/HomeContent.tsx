import React, { FC } from 'react';

import Character from '../../../components/Character/Character';

import './HomeContent.css';
import { Props } from './HomeContent.interface';
import { Entry } from '../../../App/App.interface';
import { useGlobalContext } from '../../../App/App.context';

// prettier-ignore
const HomeContent: FC<Props> = ({ className = '' }): React.ReactElement => {
  const { entries } = useGlobalContext();

  const ENTRIES = entries.map(
    ({ gender, status, image, name, species }: Entry, index: number) => (
      <Character
        className="content__character"
        gender={gender}
        species={species}
        status={status}
        image={image}
        name={name}
        key={index}
      />
    ),
  );

  return <div className={`content ${className}`}>{ENTRIES}</div>;
};

export default HomeContent;
