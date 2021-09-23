import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { routes } from '../routes/routes';
import { RouteObject } from '../routes/routes.interface';

export default function MainRoutes(): React.ReactElement {
  return (
    <Switch>
      {routes.map(
        ({ path, component }: RouteObject, index: number) => (
          <Route
            path={path}
            component={component}
            exact={true}
            key={index}
          />
        ),
      )}
    </Switch>
  );
}
