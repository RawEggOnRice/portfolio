import { IMAGE_PATH } from '@/shared/constants/imagePath.constant';
import { PATH } from '@/shared/constants/path.constant';
import { Egg, EggAlt, RiceBowl } from '@mui/icons-material';
import { Button, Link, Stack } from '@mui/material';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import MainCard from './MainCard.component';

/**
 * 画像、説明文、アクションボタンを柔軟に配置できる汎用カードコンポーネント。<br>
 * `isContentLabel`プロパティによって`description`の扱いが切り替わります。
 * - `true`:`description`に文字列を渡し、内部で`Typography`としてレンダリングされます。
 * - `false`（または未指定）: `description`に直接JSX（`ReactNode`）を渡すことができます。
 *
 * 内部の各パーツは `image`, `description`, `actions` の有無に応じて自動的に表示・非表示が切り替わります。
 *
 * ## デフォルト
 * - Card: elevation={1}, borderRadius: 2, minWidth: 100
 * - CardMedia: height: 80, objectFit: 'contain', padding: 2
 * - CardActions: justifyContent: 'end'
 *
 * ## 例
 * ```tsx
 * // 1. シンプルな文字列のテキストを渡す場合（isContentLabel を true にする）
 * <MainCard
 *   isContentLabel={true}
 *   image="/path/image.png"
 *   description="このカードの説明文です。"
 *   actions={<Button>詳細を見る</Button>}
 * />
 *
 * // 2. カスタムなJSX要素を渡す場合（isContentLabel は不要）
 * <MainCard
 *   description={
 *     <Stack gap={1}>
 *       <Typography variant="h6">タイトル</Typography>
 *       <Typography>詳細なリストや複雑なレイアウト</Typography>
 *     </Stack>
 *   }
 * />
 * ```
 */
const meta = {
  title: 'Component/Card/MainCard',
  component: MainCard,
  tags: ['autodocs'],
  argTypes: {
    image: {
      control: false,
    },
    actions: {
      control: false,
    },
    isDescriptionText: {
      control: false,
    },
    slotProps: {
      control: false,
    },
  },
  render: (args) => <MainCard {...args} />,
} satisfies Meta<typeof MainCard>;
export default meta;

type Story = StoryObj<typeof meta>;

const LOCALHOST_NAME = 'localhost';

const hostname = typeof window !== 'undefined' ? window.location.hostname : LOCALHOST_NAME;

const image =
  hostname === LOCALHOST_NAME
    ? IMAGE_PATH.STORYBOOK
    : `${PATH.BASE_PATH}${PATH.STORYBOOK}${IMAGE_PATH.STORYBOOK}`;

export const ContentLabel: Story = {
  args: {
    image: image,
    isDescriptionText: true,
    actions: <Button>action</Button>,
    description: 'テキストがココに入ります',
  },
};

export const JSX: Story = {
  args: {
    image: image,
    description: (
      <Stack gap={2}>
        <Stack direction={'row'} gap={2}>
          <Egg />
          <EggAlt />
          <RiceBowl />
        </Stack>
        <Link href={''}>LINK</Link>
      </Stack>
    ),
    actions: <Button>action</Button>,
  },
};
