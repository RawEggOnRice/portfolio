import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, userEvent, within } from 'storybook/test';
import TestButton from './TestButton.component';

const meta: Meta<typeof TestButton> = {
  title: 'Component/UI/Button',
  component: TestButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'Primary Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Primary Button' });
    await userEvent.click(button);
    await expect(button).toBeInTheDocument();
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    children: 'Outlined Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Outlined Button' });
    await userEvent.click(button);
    await expect(button).toBeInTheDocument();
  },
};
