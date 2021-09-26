import React, { FC } from 'react';

import './About.css';
import { Props } from './About.interface';

const About: FC<Props> = ({}): React.ReactElement => {
  return (
    <section className="about">
      <div className="about__inner">
        <div className="about__avatar">
          <img className="about__image" src="https://thumbs.dfs.ivi.ru/storage5/contents/7/1/22be48dae13ba93ed78d2ccffb44fb.jpg"/>
        </div>
        <div className="about__description">
          <h2 className="about__title">
            About me
          </h2>
          <p className="about__text">
            Hello, my name is Anton i am beginner front-end developer, i like read books, play on guitar and concerts,
            my favorite books are 1983 by George Orwell and "Three friends" by Erich Maria Remarque, if talk about concerts 
            i like genre punk and post-hardcore, last concert that i visited in St. Petersburg at 2019 year, was of group the Napalm Death.
            My favorite direction is development, i like write code and to solve interesting tasks.
          </p>
          <p className="about__text">
            Thanks for a reading!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
