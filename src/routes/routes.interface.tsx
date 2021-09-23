import React from 'react';

export interface RouteObject {
  path: string;
  component: () => JSX.Element;
}
