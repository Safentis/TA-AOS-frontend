import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Input from './Input';

import { Props } from './Input.interface';

const setUp = (props: Props) => {
  return shallow(<Input {...props} />);
};

describe('<Input />', () => {
  let component: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  let props: Props = {
    className: 'custom-style',
    value: 'string',
    id: 'some-id',
    placeholder: 'some-text',
    handleChange: () => {},
  };

  beforeEach(() => {
    component = setUp(props);
  });

  it('component does match to the snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  describe('Markup: ', () => {
    it('has 1 input element', () => {
      expect(component.find('input')).toBeTruthy();
    });

    it('has style "input" and "custom-style"', () => {
      expect(component.find('input').hasClass('input')).toBeTruthy();
      expect(
        component.find('input').hasClass('custom-style'),
      ).toBeTruthy();
    });

    it(`has value ${props.value}`, () => {
      expect(
        component.find('input').prop('value') === props.value,
      ).toBeTruthy();
    });
  });
});

describe('<Input /> default props', () => {
  let component: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  let props: Props = {
    value: 'string',
    id: 'some-id',
    placeholder: 'some-text',
    handleChange: () => {},
  };

  beforeEach(() => {
    component = setUp(props);
  });

  it('component does match to the snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  describe('Markup: ', () => {
    it('has only one style "input"', () => {
      expect(component.find('input').hasClass('input')).toBeTruthy();
    });
  });
});
