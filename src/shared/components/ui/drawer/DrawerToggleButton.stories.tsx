import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { MouseEvent, useState } from 'react';
import { fn } from 'storybook/test';
import DrawerToggleButton from './DrawerToggleButton.component';

/**
 * ドロワーの開閉操作を行うリストアイテムボタン<br>
 * アイコンの回転アニメーションとテキストのフェードアニメーションを内包
 */
const meta = {
  title: 'Component/UI/Drawer/DrawerToggleButton',
  component: DrawerToggleButton,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: false,
    },
    onClick: {
      control: false,
    },
  },
  args: {
    isOpen: false,
    onClick: fn(),
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState<boolean>(args.isOpen ?? false);

    const handleToggle = (event: MouseEvent<HTMLDivElement>) => {
      setIsOpen((bool) => !bool);
      args.onClick?.(event);
    };

    return <DrawerToggleButton {...args} isOpen={isOpen} onClick={handleToggle} />;
  },
} satisfies Meta<typeof DrawerToggleButton>;

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
