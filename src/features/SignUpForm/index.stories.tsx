import type { Meta, StoryObj } from '@storybook/react';

import { SignUpForm } from '.';

export default {
  component: SignUpForm,
} satisfies Meta<typeof SignUpForm>;

export const Primary: StoryObj<typeof SignUpForm> = {};
