import { Paper, PaperProps, styled } from '@mui/material';

type FlatPaperStyleProps = {
  /** ペーパーの高さ */
  height?: string | number;
  /** ペーパーの幅 */
  width?: string | number;
  /**
   * 背景色をデフォルト背景色（`background.default`）にするかどうか。 \
   * false: 通常のペーパー色（`background.paper`）になります。
   * @default false
   */
  isDefaultBackground?: boolean;
};

const FlatPaperStyle = styled(Paper, {
  shouldForwardProp: (prop) => {
    return prop !== 'height' && prop !== 'width' && prop !== 'isDefaultBackground';
  },
})<FlatPaperStyleProps>(({ theme, isDefaultBackground, height, width }) => ({
  flex: 1,
  padding: theme.spacing(2),
  backgroundColor: isDefaultBackground
    ? theme.palette.background.default
    : theme.palette.background.paper,
  height: height,
  width: width,
  borderRadius: Number(theme.shape.borderRadius) * 2,
}));

type FlatPaperProps = FlatPaperStyleProps & PaperProps;

/**
 * 影を持たないフラットなデザインのPaperコンポーネント。
 * @default
 * - elevation: 0
 * - flex: 1
 * - padding: 2
 * - borderRadius: 2
 * @param props {@link FlatPaperProps}
 *
 * @example
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
const FlatPaper = (props: FlatPaperProps) => {
  const { children, ...restProps } = props;
  return (
    <FlatPaperStyle elevation={0} {...restProps}>
      {children}
    </FlatPaperStyle>
  );
};
export default FlatPaper;
