import { Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import FlatPaper from './FlatPaper.component';

const meta = {
  title: 'Component/UI/Paper/FlatPaper',
  component: FlatPaper,
  tags: ['autodocs'],
} satisfies Meta<typeof FlatPaper>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isDefaultBackground: false,
    height: 'auto',
    width: 'auto',
  },
  render: (args) => {
    return (
      <FlatPaper {...args}>
        <Typography>Default</Typography>
      </FlatPaper>
    );
  },
};

export const DefaultBackground: Story = {
  args: {
    isDefaultBackground: true,
    height: 'auto',
    width: 'auto',
  },
  render: (args) => {
    return (
      <FlatPaper {...args}>
        <Typography>DefaultBackground</Typography>
      </FlatPaper>
    );
  },
};
