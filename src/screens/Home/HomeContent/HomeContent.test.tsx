import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import HomeContent from './HomeContent';

import { Props } from './HomeContent.interface';

const setUp = (props: Props) => {
  return shallow(<HomeContent {...props} />);
};

describe('<HomeContent />', () => {
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
