import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = { args: { label: 'Email', placeholder: 'you@example.com' } };
export const WithError: Story = { args: { label: 'Email', error: 'Invalid email address', value: 'bad-email' } };
export const WithHelper: Story = { args: { label: 'Password', type: 'password', helperText: 'Must be at least 8 characters' } };
export const Disabled: Story = { args: { label: 'Username', disabled: true, value: 'arun' } };
