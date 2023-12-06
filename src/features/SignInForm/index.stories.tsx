import type { Meta, StoryObj } from '@storybook/react';

import { SignInForm } from '.';

export default {
  component: SignInForm,
} satisfies Meta<typeof SignInForm>;

export const Primary: StoryObj<typeof SignInForm> = {};
