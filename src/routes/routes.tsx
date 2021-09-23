import { RouteObject } from './routes.interface';
import { Pathes } from '../utils/pathes';

export const routes: RouteObject[] = [
  {
    path: Pathes.PATH_MAIN,
    component: () => <h1>MAIN</h1>,
  },
  {
    path: Pathes.PATH_ABOUT,
    component: () => <h1>ABOUT</h1>,
  },
];
