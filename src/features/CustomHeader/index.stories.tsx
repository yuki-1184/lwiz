import type { Meta, StoryObj } from '@storybook/react';

import { CustomHeader } from './presentations';

const meta: Meta<typeof CustomHeader> = {
  component: CustomHeader,
};

export default meta;
type Story = StoryObj<typeof CustomHeader>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <CustomHeader />,
};
