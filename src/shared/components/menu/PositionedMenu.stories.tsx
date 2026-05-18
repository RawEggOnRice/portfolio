import { Button, Stack, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { MouseEvent, useState } from 'react';
import { fn, userEvent, within } from 'storybook/test';
import PositionedMenu from './PositionedMenu.component';

/**
 * アンカー要素を基準にポップアップ表示されるメニューコンポーネント
 */
const meta = {
  title: 'Component/Menu/PositionedMenu',
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'メニューを開く' });
    await userEvent.click(button);
    const menuItem = within(document.body).getByText('メニュー1');
    await userEvent.click(menuItem);
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
