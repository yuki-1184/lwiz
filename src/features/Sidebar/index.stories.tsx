import type { Meta, StoryObj } from '@storybook/react';

import Sidebar from '.';

export default {
  component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export const Primary: StoryObj<typeof Sidebar> = {};
