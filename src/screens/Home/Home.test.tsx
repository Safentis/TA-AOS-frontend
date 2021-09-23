import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Home from './Home';

import { Props } from './Home.interface';

const setUp = (props: Props) => {
  return shallow(<Home {...props} />);
};

describe('<Home />', () => {
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

  describe('Markup', () => {
    it('has 3 Label elements', () => {
      expect(component.find('Label').length === 3).toBeTruthy();
    });

    it('has 1 Input element', () => {
      expect(component.find('Input')).toBeTruthy();
    });
  });
});
