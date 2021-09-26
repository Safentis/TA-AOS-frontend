import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import HomeFilters from './HomeFilters';

import { Props } from './HomeFilters.interface';

const setUp = (props: Props) => {
  return shallow(<HomeFilters {...props} />);
};

describe('<HomeFilters />', () => {
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

  describe('Markup', () => {
    it('has 1 Input element', () => {
      expect(component.find('Input')).toBeTruthy();
    });
  });
});
