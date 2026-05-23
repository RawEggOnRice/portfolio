import FlatPaper from '@/shared/components/paper/FlatPaper.component';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import AppContentWrapper from './AppContentWrapper.component';

/**
 * アプリケーションのメインコンテンツ領域をラップするレイアウトコンポーネント。
 * - ドロワーの開閉状態（`isOpen`）や画面サイズ（`isMobile`）に応じて、 \
 * ヘッダー・ドロワー分の余白を自動計算し、メインコンテンツを適切な位置に配置します。
 */
const meta = {
  title: 'Component/Content/AppContentWrapper',
  component: AppContentWrapper,
  tags: ['autodocs'],
  argTypes: {
    isMobile: {
      type: 'boolean',
    },
    isOpen: {
      type: 'boolean',
    },
    children: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
  args: {
    isMobile: false,
    isOpen: false,
    children: <FlatPaper>Children</FlatPaper>,
  },
} satisfies Meta<typeof AppContentWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

/** PC版クローズ */
export const PCClose: Story = {};

/** PC版オープン */
export const PcOpen: Story = {
  args: {
    isOpen: true,
  },
};

/** モバイル版 */
export const Mobile: Story = {
  argTypes: {
    isOpen: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
  args: {
    isMobile: true,
  },
};
