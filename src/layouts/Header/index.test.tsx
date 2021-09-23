import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Header from './index';

import { Props } from './index.interface';

const setUp = (props: Props) => {
  return shallow(<Header {...props} />);
};

describe('<Header />', () => {
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
    it('has root heade element', () => {
      expect(component.find('header')).toBeTruthy();
    });

    it('has root heade element', () => {
      expect(component.find('h2')).toBeTruthy();
      expect(
        component.find('h2').text() === 'Rick and Morty',
      ).toBeTruthy();
    });
  });
});
