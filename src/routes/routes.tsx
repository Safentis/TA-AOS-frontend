import Home from '../screens/Home/Home';
import About from '../screens/About/About';

import { RouteObject } from './routes.interface';
import { Pathes } from '../utils/pathes';

export const routes: RouteObject[] = [
  {
    path: Pathes.PATH_MAIN,
    component: Home,
  },
  {
    path: Pathes.PATH_ABOUT,
    component: About,
  },
];
