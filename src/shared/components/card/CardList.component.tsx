import { Grid, GridProps, GridSize } from '@mui/material';
import { Breakpoint } from '@mui/material/styles';
import MainCard, { MainCardProps } from './MainCard.component';

/** MainCardのプロパティに、Reactのリストレンダリング用の必須キー（`id`）を追加した型 */
export type CardListItem = MainCardProps & { id: string };

/** MUIのレスポンシブな値（単一値、配列、ブレイクポイントごとのオブジェクト）を許容する型 */
type ResponsiveStyleValue<T> = T | Array<T | null> | { [key in Breakpoint]?: T | null };

export type CardListProps = {
  /** レンダリングするカードのデータ配列（各要素に一意の `id` が必須です） */
  items: CardListItem[];
  /**
   * 各カード要素のグリッドサイズ（幅）。
   * MUIのレスポンシブ記法を利用して、画面サイズごとにカラム数を制御できます。
   * @default xs: 12, md: 6, xl: 4
   */
  gridSize?: ResponsiveStyleValue<GridSize>;
  /** 内部の各MUIコンポーネントへ渡す追加プロパティ */
  slotProps?: {
    /** 個別のグリッドアイテム（Grid要素）への追加プロパティ（keyを除く） */
    gridItem?: Omit<GridProps, 'key'>;
  };
};

/**
 * 複数の`MainCard`をレスポンシブなグリッドレイアウトで並べるリストコンポーネント。
 *
 * @default
 * - spacing: 2
 * - gridSize: {xs: 12, md: 6, xl: 4}
 *
 * @param props {@link CardListProps}
 *
 * @example
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
const CardList = (props: CardListProps) => {
  const { items, gridSize, slotProps = {} } = props;
  const { gridItem } = slotProps;
  return (
    <Grid container spacing={2}>
      {items.map((item) => {
        const { id, ...restProps } = item;
        const size = gridSize ?? { xs: 12, md: 6, xl: 4 };
        return (
          <Grid size={size} {...gridItem} key={id}>
            <MainCard {...restProps} />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default CardList;
