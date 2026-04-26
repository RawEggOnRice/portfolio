import { Button, Stack, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { MouseEvent, useState } from 'react';
import { fn } from 'storybook/test';
import PositionedMenu from './PositionedMenu.component';

const meta = {
  title: 'Component/UI/Menu/PositionedMenu',
  component: PositionedMenu,
  tags: ['autodocs'],
  argTypes: {
    anchorEl: { control: false },
  },
  args: {
    onClose: fn(),
    anchorEl: null,
    items: [],
  },
} satisfies Meta<typeof PositionedMenu>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [{ label: 'メニュー1' }, { label: 'メニュー2' }, { label: 'メニュー3' }],
  },
  render: (args) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [value, setValue] = useState<string>('');

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
      args.onClose();
    };

    const items = args.items.map((item) => {
      return {
        ...item,
        onClick: (event: MouseEvent<HTMLLIElement>) => {
          setValue(`${item.label}がクリックされました`);

          if (item.onClick) {
            item.onClick(event);
          }
        },
      };
    });

    return (
      <Stack alignItems={'center'}>
        <Typography>{value}</Typography>
        <Button onClick={handleClick} sx={{ width: 'fit-content' }}>
          メニューを開く
        </Button>
        <PositionedMenu {...args} anchorEl={anchorEl} onClose={handleClose} items={items} />
      </Stack>
    );
  },
};
