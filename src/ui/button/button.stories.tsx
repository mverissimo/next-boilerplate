import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

export default {
  title: 'Example/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export const Base: StoryObj<typeof Button> = {
  args: {
    children: 'Button',
  },
};
