import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import AppHeader from './AppHeader.component';

/**
 * アプリケーションの共通ヘッダーコンポーネント
 *
 * ## デフォルト
 * - appTitleLabel: LABELS.COMMON.APP_TITLE ('PORTFOLIO')
 * - appTitleHref: PATH.HOME ('/')
 * - isMobile: false
 * - isOpen: false
 */
const meta = {
  title: 'Component/Header/AppHeader',
  component: AppHeader,
  tags: ['autodocs'],
  argTypes: {
    isMobile: {
      type: 'boolean',
    },
    isMobileOpen: {
      type: 'boolean',
    },
    onMenuClick: {
      control: false,
    },
    slotProps: {
      control: false,
    },
  },
  args: {
    onMenuClick: fn(),
  },
} satisfies Meta<typeof AppHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Pc: Story = {
  args: {
    isMobile: false,
  },
};

export const MobileClose: Story = {
  args: {
    isMobileOpen: false,
    isMobile: true,
  },
};

export const MobileOpen: Story = {
  args: {
    isMobileOpen: true,
    isMobile: true,
  },
};
