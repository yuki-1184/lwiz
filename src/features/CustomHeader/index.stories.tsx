import type { Meta, StoryObj } from '@storybook/react';

import { CustomHeader } from '.';

export default {
  component: CustomHeader,
} satisfies Meta<typeof CustomHeader>;

export const Primary: StoryObj<typeof CustomHeader> = {
  args: {
    name: 'Satoki Ohashi',
  },
};
