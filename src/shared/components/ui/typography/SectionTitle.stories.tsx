import { Meta, StoryObj } from '@storybook/nextjs-vite';
import SectionTitle from './SectionTitle.component';

/**
 * 左側にアクセントカラーの装飾バーが付いたセクションタイトルコンポーネント。
 *
 * ## デフォルト
 * - size: `'h5'`
 * - hideDecoration: `false`
 *
 * ## 例
 * ```tsx
 * // デフォルト（h5サイズ）で使用する場合
 * <SectionTitle>デフォルト</SectionTitle>
 * // h6サイズで使用する場合
 * <SectionTitle size={'h6'}>h6サイズ</SectionTitle>
 * // 装飾を消す場合
 * <SectionTitle hideDecoration>h6サイズ</SectionTitle>
 * ```
 */
const meta = {
  title: 'Component/UI/Typography/SectionTitle',
  component: SectionTitle,
  tags: ['autodocs'],
  argTypes: {
    otherProps: {
      control: false,
    },
    hideDecoration: {
      type: 'boolean',
    },
  },
} satisfies Meta<typeof SectionTitle>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SizeH5: Story = {
  args: {
    children: 'h5セクション',
  },
};

export const SizeH6: Story = {
  args: {
    children: 'h6セクション',
    size: 'h6',
  },
};

export const HideDecoration: Story = {
  args: {
    children: 'HideDecorationセクション',
    hideDecoration: true,
  },
};
