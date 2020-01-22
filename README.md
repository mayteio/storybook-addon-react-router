# `storybook-addon-react-router`

A dead simple storybook addon for decorating your stories with [`react-router`]() 🔀

## Installation

`yarn add -D storybook-addon-react-router`

## Usage

```
import React from 'react';
import TestComponent from './TestComponent';
import { withReactRouter } from '../src/decorator';

export default {
  title: 'Example',
  component: TestComponent,
};

// give your story of a component that uses react-router
export const Example = () => <TestComponent />;

// add a decorator that wraps your story so you have access to router context.
Example.story = {
  decorators: [withReactRouter()],
  parameters: {
    // you can pass MemoryRouter config to the 'router' parameter.
    router: { initialEntries: ['/my-route'] },
  },
};
```
