import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Select from './Select';

import { Props } from './Select.interface';

const setUp = (props: Props) => {
  return shallow(<Select {...props} />);
};

describe('<Select />', () => {
  let component: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  let props: Props = {
    className: 'custom-style',
    options: ['one', 'two', 'three'],
    onChange: () => {},
    name: 'select-name',
    value: {},
    id: 'select-id',
  };

  beforeEach(() => {
    component = setUp(props);
  });

  it('component does match to the snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  describe('Markup: ', () => {
    it('has 1 root select element', () => {
      expect(component.find('select')).toBeTruthy();
    });

    it('has 3 option elements', () => {
      expect(component.find('option').length === 3).toBeTruthy();
    });

    it('has 1 root select element', () => {
      expect(
        component.find('select').hasClass('custom-style'),
      ).toBeTruthy();
    });
  });
});
