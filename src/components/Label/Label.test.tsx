import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Label from './Label';

import { Props } from './Label.interface';

const setUp = (props: Props) => {
  return shallow(<Label {...props} />);
};

describe('<Label />', () => {
  let component: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  let props: Props = {
    className: 'custom-style',
    content: 'text-content',
  };

  beforeEach(() => {
    component = setUp(props);
  });

  it('component does match to the snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  describe('Markup: ', () => {
    it('has 1 label element', () => {
      expect(component.find('label')).toBeTruthy();
    });

    it('has style "label" and "custom-style"', () => {
      expect(component.find('label').hasClass('label')).toBeTruthy();
      expect(
        component.find('label').hasClass('custom-style'),
      ).toBeTruthy();
    });

    it(`has content ${props.content}`, () => {
      expect(
        component.find('label').text() === props.content,
      ).toBeTruthy();
    });
  });
});

describe('<Label /> default props', () => {
  let component: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  let props: Props = {
    content: 'mote of texts',
  };

  beforeEach(() => {
    component = setUp(props);
  });

  it('component does match to the snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  describe('Markup: ', () => {
    it('has only one style "label"', () => {
      expect(component.find('label').hasClass('label')).toBeTruthy();
    });

    it(`has content ${props.content}`, () => {
      expect(
        component.find('label').text() === props.content,
      ).toBeTruthy();
    });
  });
});
