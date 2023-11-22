import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

export default {
  component: Button,
} satisfies Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {
  render: () => <Button>Hello World</Button>,
};
