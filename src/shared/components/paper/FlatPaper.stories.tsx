import { Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import FlatPaper from './FlatPaper.component';

/**
 * 影を持たないフラットなデザインのPaperコンポーネント。
 * ## デフォルト
 * - elevation: 0
 * - flex: 1
 * - padding: 2
 * - borderRadius: 2
 *
 * ## 例
 * ```tsx
 * // 基本的な使い方（背景色は paper）
 * <FlatPaper>コンテンツ</FlatPaper>
 *
 * // 背景色を default に変更し、高さを指定する場合
 * <FlatPaper isDefaultBackground height="100%">
 *   コンテンツ
 * </FlatPaper>
 * ```
 */
const meta = {
  title: 'Component/Paper/FlatPaper',
  component: FlatPaper,
  tags: ['autodocs'],
  render: (args) => (
    <FlatPaper {...args}>
      <Typography>{args.children}</Typography>
    </FlatPaper>
  ),
} satisfies Meta<typeof FlatPaper>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isDefaultBackground: false,
    height: 'auto',
    width: 'auto',
    children: 'Default',
  },
};

export const DefaultBackground: Story = {
  args: {
    isDefaultBackground: true,
    height: 'auto',
    width: 'auto',
    children: 'DefaultBackground',
  },
};
