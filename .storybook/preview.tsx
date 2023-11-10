import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { cn } from '../src/lib/utils';

const preview: Preview = {
  parameters: {
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
      <>
        <div className={cn('min-h-screen bg-background font-sans antialiased', '--font-sans')}>
          <Theme>
            <Story />
          </Theme>
        </div>
      </>
    ),
  ],
};

export default preview;
