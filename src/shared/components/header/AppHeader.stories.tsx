import { IMAGE_PATH } from '@/shared/constants/imagePath.constant';
import { PATH } from '@/shared/constants/path.constant';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import AppHeader from './AppHeader.component';

const LOCALHOST_NAME = 'localhost';

const hostname = typeof window !== 'undefined' ? window.location.hostname : LOCALHOST_NAME;

const src =
  hostname === LOCALHOST_NAME
    ? IMAGE_PATH.DUMMY_AVATAR
    : `${PATH.BASE_PATH}${PATH.STORYBOOK}${IMAGE_PATH.DUMMY_AVATAR}`;

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
    slotProps: {
      avatarMenuButton: { src: src },
    },
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
