import { Egg, EggAlt, RiceBowl } from '@mui/icons-material';
import { Stack } from '@mui/material';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import AppResponsiveDrawer, { AppResponsiveDrawerProps } from './AppResponsiveDrawer.component';

/**
 * レスポンシブ対応のドロワー（サイドバー）コンポーネント
 * - 画面幅（`isMobile`）に応じて、PC用の常時配置ドロワー（AnimatedDrawer）と <br>
 * モバイル用の一時表示ドロワー（MUI Drawer）のUIを自動で切り替えます。
 */
const meta = {
  title: 'Component/Drawer/AppResponsiveDrawer',
  component: AppResponsiveDrawer,
  tags: ['autodocs'],
  argTypes: {
    drawerItems: {
      control: false,
      table: {
        disable: true,
      },
    },
    handleClickMenu: {
      control: false,
      table: {
        disable: true,
      },
    },
    handleDrawerToggle: {
      control: false,
      table: {
        disable: true,
      },
    },
    isMobile: {
      type: 'boolean',
    },
    isOpen: {
      type: 'boolean',
    },
    mobileOpen: {
      type: 'boolean',
    },
  },
  args: {
    drawerItems: [
      {
        text: 'メニュー1',
        icon: <Egg />,
        onClick: fn(),
      },
      {
        text: 'メニュー2',
        icon: <EggAlt />,
        onClick: fn(),
      },
      {
        text: 'メニュー3',
        icon: <RiceBowl />,
        onClick: fn(),
      },
    ],
    handleClickMenu: fn(),
    handleDrawerToggle: fn(),
    isMobile: false,
    isOpen: false,
    mobileOpen: false,
  },
  render: (args) => {
    return (
      <Stack minHeight={300}>
        <AppResponsiveDrawer {...args} />
      </Stack>
    );
  },
} satisfies Meta<typeof AppResponsiveDrawer>;

export default meta;

type Story = StoryObj<typeof meta>;

/** PCバージョン（クローズ） */
export const PcClose: Story = {
  argTypes: {
    isMobile: {
      control: false,
      table: {
        disable: true,
      },
    },
    mobileOpen: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
};

/** PCバージョン（オープン） */
export const PcOpen: Story = {
  argTypes: {
    isMobile: {
      control: false,
      table: {
        disable: true,
      },
    },
    mobileOpen: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
  args: {
    isOpen: true,
  },
};

/** モバイルバージョン（クローズ） */
export const MobileClose: Story = {
  tags: ['!autodocs'],
  argTypes: {
    isOpen: {
      control: false,
      table: {
        disable: true,
      },
    },
    isMobile: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
  args: {
    isMobile: true,
    mobileOpen: false,
  },
  render: (args) => {
    // コントローラと同期
    const [{ mobileOpen }, updateArgs] = useArgs<AppResponsiveDrawerProps>();

    const handleClose = () => {
      updateArgs({ mobileOpen: !mobileOpen });
    };

    return (
      <AppResponsiveDrawer {...args} handleDrawerToggle={handleClose} mobileOpen={mobileOpen} />
    );
  },
};

/** モバイルバージョン（オープン） */
export const MobileOpen: Story = {
  tags: ['!autodocs'],
  argTypes: {
    isOpen: {
      control: false,
      table: {
        disable: true,
      },
    },
    isMobile: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
  args: {
    isMobile: true,
    mobileOpen: true,
  },
  render: (args) => {
    // コントローラと同期
    const [{ mobileOpen }, updateArgs] = useArgs<AppResponsiveDrawerProps>();

    const handleClose = () => {
      updateArgs({ mobileOpen: !mobileOpen });
    };

    return (
      <AppResponsiveDrawer {...args} handleDrawerToggle={handleClose} mobileOpen={mobileOpen} />
    );
  },
};
