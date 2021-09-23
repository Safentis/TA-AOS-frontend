import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import About from './About';

import { Props } from './About.interface';

const setUp = (props: Props) => {
  return shallow(<About {...props} />);
};

describe('<About />', () => {
  let component: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  let props: Props = {};

  beforeEach(() => {
    component = setUp(props);
  });

  it('component does match to the snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
