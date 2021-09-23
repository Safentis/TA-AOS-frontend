import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Aside from './index';

import { Props } from './index.interface';

const setUp = (props: Props) => {
  return shallow(<Aside {...props} />);
};

describe('<Aside />', () => {
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

  describe('Markup: ', () => {
    it('has 1 aside root element', () => {
      expect(component.find('aside')).toBeTruthy();
    });

    it('has 2 Link elements', () => {
      expect(component.find('Link').length === 2).toBeTruthy();
    });

    it('has 2 FontAwesomeIcon elements', () => {
      expect(
        component.find('FontAwesomeIcon').length === 2,
      ).toBeTruthy();
    });
  });
});
