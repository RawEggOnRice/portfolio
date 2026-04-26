import { EggOutlined, RiceBowl } from '@mui/icons-material';
import { Stack } from '@mui/material';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import AnimatedDrawer from './AnimatedDrawer.component';
import DrawerMenuList from './DrawerMenuList.component';

/** `MUI` の `Drawer` コンポーネントに `isOpen` プロパティと開閉アニメーションを追加したコンポーネント。 */
const meta = {
  title: 'Component/UI/Drawer/AnimatedDrawer',
  component: AnimatedDrawer,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: false,
    },
    isOpen: {
      control: false,
    },
  },
  args: {
    variant: 'permanent',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState<boolean>(args.isOpen ?? false);

    const handleClickMenu = () => {
      setIsOpen((bool) => !bool);
    };

    return (
      <Stack minHeight={200}>
        <AnimatedDrawer {...args} isOpen={isOpen}>
          <DrawerMenuList
            isOpen={isOpen}
            onToggleButtonClick={handleClickMenu}
            items={[
              {
                icon: <EggOutlined />,
                text: 'アイテム1',
              },
              {
                icon: <RiceBowl />,
                text: 'アイテム2',
              },
            ]}
          />
        </AnimatedDrawer>
      </Stack>
    );
  },
} satisfies Meta<typeof AnimatedDrawer>;

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
