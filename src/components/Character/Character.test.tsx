import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Character from './Character';

import { Props } from './Character.interface';

const setUp = (props: Props) => {
  return shallow(<Character {...props} />);
};

describe('<Character />', () => {
  let component: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  let props: Props = {
    className: 'custom-style',
    species: 'Human',
    gender: 'male',
    status: 'alive',
    image: 'www.domain.com',
    name: 'morty',
  };

  beforeEach(() => {
    component = setUp(props);
  });

  it('component does match to the snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});