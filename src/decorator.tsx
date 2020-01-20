import React from 'react';
import { makeDecorator } from '@storybook/addons';
import { MemoryRouter } from 'react-router';

export const withReactRouter = makeDecorator({
  name: 'withReactRouter',
  parameterName: 'router',
  wrapper: (getStory, context, { parameters }) => {
    return <MemoryRouter {...parameters}>{getStory(context)}</MemoryRouter>;
  },
});
