import { Button } from '@mui/material';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import CardList from './CardList.component';

/**
 * 複数の`MainCard`をレスポンシブなグリッドレイアウトで並べるリストコンポーネント。
 *
 * ## デフォルト
 * - spacing: 2
 * - gridSize: {xs: 12, md: 6, xl: 4}
 *
 * ## 例
 * ```tsx
 * const items: CardListItem[] = [
 *   { id: '1', isContentLabel: true, description: 'カード1' },
 *   { id: '2', isContentLabel: true, description: 'カード2' },
 * ];
 *
 * // デフォルトのレスポンシブ設定で表示する場合
 * <CardList items={items} />
 * ```
 */
const meta = {
  title: 'Component/Card/CardList',
  component: CardList,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: false,
    },
    slotProps: {
      control: false,
    },
  },
} satisfies Meta<typeof CardList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        id: 'id_1',
        description: 'id_1',
        isDescriptionText: true,
        actions: <Button>action</Button>,
      },
      {
        id: 'id_2',
        description: 'id_2',
        isDescriptionText: true,
        actions: <Button>action</Button>,
      },
      {
        id: 'id_3',
        description: 'id_3',
        isDescriptionText: true,
        actions: <Button>action</Button>,
      },
      {
        id: 'id_4',
        description: 'id_4',
        isDescriptionText: true,
        actions: <Button>action</Button>,
      },
    ],
  },
};

export const CustomGridSize: Story = {
  args: {
    gridSize: { xs: 12 },
    items: [
      {
        id: 'id_1',
        description: 'id_1',
        isDescriptionText: true,
        actions: <Button>action</Button>,
      },
      {
        id: 'id_2',
        description: 'id_2',
        isDescriptionText: true,
        actions: <Button>action</Button>,
      },
      {
        id: 'id_3',
        description: 'id_3',
        isDescriptionText: true,
        actions: <Button>action</Button>,
      },
      {
        id: 'id_4',
        description: 'id_4',
        isDescriptionText: true,
        actions: <Button>action</Button>,
      },
    ],
  },
};
