import React from 'react';

export interface RouteObject {
  path: string;
  component: React.FC<any>;
}
