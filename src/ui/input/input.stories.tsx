import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '.';

export default {
  title: 'Example/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export const Base: StoryObj<typeof Input> = {};
