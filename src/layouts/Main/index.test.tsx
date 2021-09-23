import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Main from './index';

import { Props } from './index.interface';

const setUp = (props: Props) => {
  return shallow(<Main {...props} />);
};

describe('<Main />', () => {
  let component: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  let props: Props = {
    className: 'custom-style',
  };

  beforeEach(() => {
    component = setUp(props);
  });

  it('component does match to the snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
