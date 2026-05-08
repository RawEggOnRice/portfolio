import { mergeSx } from '@/shared/utils/mergeSx.util';
import {
  Card,
  CardActions,
  CardActionsProps,
  CardContent,
  CardContentProps,
  CardMedia,
  CardMediaProps,
  CardProps,
  Divider,
  DividerProps,
  Typography,
  TypographyProps,
} from '@mui/material';
import { JSX, ReactNode } from 'react';

/** `description`に文字列を渡す場合の型制約 */
type MainCardContentLabel = {
  /** `description`が文字列であることを示すフラグ */
  isContentLabel: true;
  /** カード本文として表示する文字列 */
  description?: string;
};

/** `description` にカスタムJSXを渡す場合の型制約 */
type MainCardContentNode = {
  /** カスタムノードを渡す場合は `false` または未指定にします */
  isContentLabel?: false;
  /** カード本文として表示するJSX要素 */
  description?: JSX.Element;
};

/** `isContentLabel`の値によって`description`の型を分岐させるユニオン型 */
type BranchContent = MainCardContentLabel | MainCardContentNode;

export type MainCardProps = BranchContent & {
  /** カード上部に表示する画像のURL */
  image?: string;
  /** カード下部のアクションエリア（ボタンなど）に配置する要素 */
  actions?: ReactNode;
  /** 内部の各MUIコンポーネントへ渡す追加プロパティ */
  otherProps?: {
    /** 全体のラッパー（`Card`）への追加プロパティ */
    card?: CardProps;
    /** 画像エリア（`CardMedia`）への追加プロパティ */
    cardMedia?: CardMediaProps;
    /** 区切り線（`Divider`）への追加プロパティ */
    divider?: DividerProps;
    /** 本文エリア（`CardContent`）への追加プロパティ */
    cardContent?: CardContentProps;
    /** `isContentLabel=true`時のテキスト（`Typography`）への追加プロパティ */
    cardContentTypography?: TypographyProps;
    /** アクションエリア（`CardActions`）への追加プロパティ */
    cardActions?: CardActionsProps;
  };
};

/**
 * 画像、説明文、アクションボタンを柔軟に配置できる汎用カードコンポーネント。 \
 * `isContentLabel`プロパティによって`description`の扱いが切り替わります。
 * - `true`:`description`に文字列を渡し、内部で`Typography`としてレンダリングされます。
 * - `false`（または未指定）: `description`に直接JSX（`ReactNode`）を渡すことができます。
 *
 * 内部の各パーツは `image`, `description`, `actions` の有無に応じて自動的に表示・非表示が切り替わります。
 *
 * @default
 * - Card: elevation={1}, borderRadius: 2, minWidth: 100
 * - CardMedia: height: 80, objectFit: 'contain', padding: 2
 * - CardActions: justifyContent: 'end'
 *
 * @example
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
 *
 * @param props {@link MainCardProps}
 */
const MainCard = (props: MainCardProps) => {
  const { image, description, actions, isContentLabel, otherProps = {} } = props;
  const {
    card = {},
    cardActions = {},
    cardContent = {},
    cardMedia = {},
    divider = {},
    cardContentTypography = {},
  } = otherProps;

  // sx とそれ以外のプロパティを分離
  const { sx: cardSx, ...restCardProps } = card;
  const { sx: cardMediaSx, ...restCardMediaProps } = cardMedia;
  const { sx: cardActionsSx, ...restCardActionsProps } = cardActions;
  const { sx: typographySx, ...restTypographyProps } = cardContentTypography;
  return (
    <Card
      elevation={1}
      sx={[{ minWidth: 100, borderRadius: 2 }, ...mergeSx(cardSx)]}
      {...restCardProps}
    >
      {image && (
        <CardMedia
          component={'img'}
          height={80}
          image={image}
          sx={[
            {
              p: 2,
              bgcolor: (theme) => theme.palette.background.default,
              objectFit: 'contain',
              userSelect: 'none',
            },
            ...mergeSx(cardMediaSx),
          ]}
          {...restCardMediaProps}
        />
      )}
      <Divider {...divider} />
      {description && (
        <CardContent {...cardContent}>
          {isContentLabel ? (
            <Typography
              variant="body1"
              sx={[{ wordBreak: 'break-word' }, ...mergeSx(typographySx)]}
              {...restTypographyProps}
            >
              {description}
            </Typography>
          ) : (
            description
          )}
        </CardContent>
      )}
      {actions && (
        <CardActions
          sx={[{ justifyContent: 'end' }, ...mergeSx(cardActionsSx)]}
          {...restCardActionsProps}
        >
          {actions}
        </CardActions>
      )}
    </Card>
  );
};
export default MainCard;
