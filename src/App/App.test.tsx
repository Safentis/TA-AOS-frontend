import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import App from './App';

import { Props } from './App.interface';

const setUp = (props: Props) => {
  return shallow(<App {...props} />);
};

describe('<App />', () => {
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

  describe('Markup: ', () => {
    it('has 1 Header element', () => {
      expect(component.find('Header')).toBeTruthy();
    });

    it('has 1 Aside element', () => {
      expect(component.find('Aside')).toBeTruthy();
    });

    it('has 1 Main element', () => {
      expect(component.find('Main')).toBeTruthy();
    });

    it('has 1 AppRoutes element', () => {
      expect(component.find('AppRoutes')).toBeTruthy();
    });
  });
});
