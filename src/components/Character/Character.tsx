import React, { FC } from 'react';

import './Character.css';
import { Props } from './Character.interface';

const Character: FC<Props> = ({
  className = '',
  gender,
  species,
  status,
  image,
  name,
}): React.ReactElement => {
  return (
    <section className={'character ' + className}>
      <div className="character__avatar">
        <img className="character__image" src={image} />
      </div>
      <ul className="description-character character__description">
        <li className="description-character__item">
          <h2>{name}</h2>
        </li>
        <li className="description-character__item">{gender}</li>
        <li className="description-character__item">{species}</li>
        <li className="description-character__item">{status}</li>
      </ul>
    </section>
  );
};

export default Character;
