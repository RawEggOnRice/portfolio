import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import ToggleIcon from './ToggleIcon.component';

/**
 * 開閉状態（`isOpen`）に応じて、2つのアイコンを回転・クロスフェードさせながら切り替えるアニメーションコンポーネント。<br>
 * デフォルトでは開閉アイコンとして `Clear` (×) と `MenuOpen` (ハンバーガー) が設定されていますが、<br>
 * Propsに任意のMUIアイコン（ElementType）を渡すことで自由に上書きできます。
 *
 * ## デフォルト
 * - width: 24
 * - height: 24
 * - position: 'relative'
 *
 * ## 例
 * ```tsx
 * // デフォルトのアイコン（MenuOpen / Clear）を使用する場合
 * <ToggleIcon isOpen={isOpen}/>
 * // 任意のアイコンで上書きする場合
 * <ToggleIcon ShowsWhenCloseIcon={KeyboardArrowRight} ShowsWhenOpenIcon={KeyboardArrowLeft} isOpen={isOpen}/>
 *```
 */
const meta = {
  title: 'Component/Icon/ToggleIcon',
  component: ToggleIcon,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      type: 'boolean',
    },
    showsWhenCloseIcon: {
      control: false,
    },
    showsWhenOpenIcon: {
      control: false,
    },
  },
} satisfies Meta<typeof ToggleIcon>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    isOpen: true,
  },
};

export const Close: Story = {
  args: {
    isOpen: false,
  },
};

export const CustomOpen: Story = {
  args: {
    isOpen: true,
    showsWhenOpenIcon: KeyboardArrowLeft,
    showsWhenCloseIcon: KeyboardArrowRight,
  },
};

export const CustomClose: Story = {
  args: {
    isOpen: false,
    showsWhenOpenIcon: KeyboardArrowLeft,
    showsWhenCloseIcon: KeyboardArrowRight,
  },
};
