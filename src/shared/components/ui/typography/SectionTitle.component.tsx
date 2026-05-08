import { Box, BoxProps, Stack, StackProps, Typography, TypographyProps } from '@mui/material';
import { PropsWithChildren } from 'react';

type SectionTitleProps = PropsWithChildren & {
  /**
   * タイトルのサイズ（Typographyのvariantに対応）。 \
   * 左側の装飾バーのサイズ（幅と高さ）もこの値に連動して変化します。
   * @default 'h5'
   */
  size?: 'h5' | 'h6';
  /**
   * 装飾を隠す（true: 非表示, false: 表示）
   * @default false
   */
  hideDecoration?: boolean;
  /** 内部の各MUIコンポーネントへ渡す追加プロパティ */
  otherProps?: {
    /** 全体を囲むラッパー（Stack）への追加プロパティ */
    stack?: StackProps;
    /** 左側の装飾バー（Box）への追加プロパティ */
    box?: BoxProps;
    /** タイトルテキスト（Typography）への追加プロパティ */
    typography?: TypographyProps;
  };
};

/**
 * 左側にアクセントカラーの装飾バーが付いたセクションタイトルコンポーネント。
 * @param props
 * @example
 * ```tsx
 * // デフォルト（h5サイズ）で使用する場合
 * <SectionTitle>デフォルト</SectionTitle>
 * // h6サイズで使用する場合
 * <SectionTitle size={'h6'}>h6サイズ</SectionTitle>
 * // 装飾を消す場合
 * <SectionTitle hideDecoration>h6サイズ</SectionTitle>
 * ```
 */
const SectionTitle = (props: SectionTitleProps) => {
  const {
    children,
    size = 'h5',
    hideDecoration = false,
    otherProps: { typography, box, stack } = {},
  } = props;

  return (
    <Stack direction={'row'} gap={1} width={'100%'} alignItems={'center'} {...stack}>
      {!hideDecoration && (
        <Box
          width={size === 'h5' ? 12 : 8}
          height={(theme) => theme.typography[size]?.fontSize}
          bgcolor={(theme) => theme.palette.background.appMain}
          {...box}
        />
      )}
      <Typography variant={size} component={'h3'} fontWeight={700} {...typography}>
        {children}
      </Typography>
    </Stack>
  );
};
export default SectionTitle;
