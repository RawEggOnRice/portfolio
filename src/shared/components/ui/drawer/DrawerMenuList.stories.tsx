import { EggAlt, EggOutlined, RiceBowl } from '@mui/icons-material';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { MouseEvent, useState } from 'react';
import { fn } from 'storybook/test';
import DrawerMenuList from './DrawerMenuList.component';

/** 先頭に開閉用トグルボタンを配置し、その下に `items` を展開します。 */
const meta = {
  title: 'Component/UI/Drawer/DrawerMenuList',
  component: DrawerMenuList,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: false,
    },
    items: {
      control: false,
    },
    onToggleButtonClick: {
      control: false,
    },
  },
  args: {
    isOpen: false,
    items: [
      {
        icon: <EggOutlined />,
        text: 'アイテム1',
        onClick: fn(),
      },
      {
        icon: <RiceBowl />,
        text: 'アイテム2',
        onClick: fn(),
      },
    ],
    onToggleButtonClick: fn(),
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState<boolean>(args.isOpen ?? false);

    const handleToggle = (event: MouseEvent<HTMLDivElement>) => {
      setIsOpen((bool) => !bool);
      args.onToggleButtonClick?.(event);
    };

    return <DrawerMenuList {...args} onToggleButtonClick={handleToggle} isOpen={isOpen} />;
  },
} satisfies Meta<typeof DrawerMenuList>;
export default meta;

type Story = StoryObj<typeof meta>;

/** 開いた状態 */
export const Open: Story = {
  args: {
    isOpen: true,
  },
};

/** 閉じた状態 */
export const Close: Story = {
  args: {
    isOpen: false,
  },
};

/** `items` が3つの場合 */
export const ThreeItems: Story = {
  args: {
    isOpen: true,
    items: [
      {
        icon: <EggOutlined />,
        text: 'アイテム1',
        onClick: fn(),
      },
      {
        icon: <EggAlt />,
        text: 'アイテム2',
        onClick: fn(),
      },
      {
        icon: <RiceBowl />,
        text: 'アイテム3',
        onClick: fn(),
      },
    ],
  },
};
