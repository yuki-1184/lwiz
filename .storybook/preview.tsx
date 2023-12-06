import React from 'react';
import type { Preview } from '@storybook/react';

import { withThemeByClassName } from '@storybook/addon-themes';

import '../src/styles/globals.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Theme appearance='light'>
        <Story />
      </Theme>
    ),
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
