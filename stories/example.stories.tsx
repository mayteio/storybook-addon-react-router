import React from 'react';
import TestComponent from './TestComponent';
import { withReactRouter } from '../src/decorator';

export default {
  title: 'Example',
  // component: TestComponent,
};

export const Example = () => <TestComponent />;

Example.story = {
  decorators: [withReactRouter()],
  parameters: {
    router: { initialEntries: ['/one'] },
  },
};
