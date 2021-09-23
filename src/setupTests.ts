import '@testing-library/jest-dom';
import 'jest-enzyme';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('react-router-dom', () => {
  // Require the original module to not be mocked...
  const originalModule = jest.requireActual('react-router-dom');

  return {
    __esModule: true,
    ...originalModule,
    // add your noops here
    useParams: jest.fn(),
    useHistory: jest.fn(),
    useLocation: () => {
      return { pathname: '' };
    },
  };
});

Enzyme.configure({
  adapter: new Adapter(),
});
