import React from 'react';
import { Switch, Route } from 'react-router';

const RouteComponent: React.FC<{ name: string }> = ({ name }) => <div>I am route {name}</div>;
const TestComponent = () => {
  return (
    <Switch>
      <Route path="/one">
        <RouteComponent name="one" />
      </Route>
      <Route path="/two">
        <RouteComponent name="two" />
      </Route>
    </Switch>
  );
};

export default TestComponent;
