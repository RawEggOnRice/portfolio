'use client';

import {
  toggleIconAnimation,
  ToggleIconAnimationProps,
} from '@/shared/styles/animation/toggleIconAnimation.style';
import { Clear, MenuOpen } from '@mui/icons-material';
import { Stack, SvgIconProps, useTheme } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { ElementType } from 'react';

type ToggleIconProps = {
  /** ドロワーなどの開閉状態（true: 開いている, false: 閉じている） */
  isOpen: ToggleIconAnimationProps['isOpen'];
  /**
   * 開いている時（isOpen === true）に表示するアイコン。未指定の場合は `<Clear />` が使用されます。
   * @default Clear
   */
  ShowsWhenOpenIcon?: ElementType<SvgIconProps>;
  /**
   * 閉じている時（isOpen === false）に表示するアイコン。未指定の場合は `<MenuOpen />` が使用されます。
   * @default MenuOpen
   */
  ShowsWhenCloseIcon?: ElementType<SvgIconProps>;
};

/**
 * 開閉状態（`isOpen`）に応じて、2つのアイコンを回転・クロスフェードさせながら切り替えるアニメーションコンポーネント。 \
 * デフォルトでは開閉アイコンとして `Clear` (×) と `MenuOpen` (ハンバーガー) が設定されていますが、 \
 * Propsに任意のMUIアイコン（ElementType）を渡すことで自由に上書きできます。
 *
 * @default
 * - width: 24
 * - height: 24
 * - position: 'relative'
 *
 * @param props {@link ToggleIconProps}
 *
 * @example
 * ```tsx
 * // デフォルトのアイコン（MenuOpen / Clear）を使用する場合
 * <ToggleIcon isOpen={isOpen}/>
 * // 任意のアイコンで上書きする場合
 * <ToggleIcon ShowsWhenCloseIcon={KeyboardArrowRight} ShowsWhenOpenIcon={KeyboardArrowLeft} isOpen={isOpen}/>
 *```
 */
const ToggleIcon = (props: ToggleIconProps) => {
  const { isOpen, ShowsWhenOpenIcon, ShowsWhenCloseIcon } = props;

  const theme = useTheme();

  /** 共通のSxProps */
  const commonSx: SxProps<Theme> = {
    position: 'absolute',
    color: theme.palette.text.primary,
  };

  /** 開いてる時のアイコンのSxProps */
  const showsWhenOpenSx: SxProps<Theme> = {
    ...commonSx,
    ...toggleIconAnimation({ isOpen, showsWhenOpen: true, theme }),
  };

  /** 閉じてる時のアイコンのSxProps */
  const showsWhenCloseSx: SxProps<Theme> = {
    ...commonSx,
    ...toggleIconAnimation({ isOpen, showsWhenOpen: false, theme }),
  };

  return (
    <Stack width={24} height={24} position={'relative'}>
      {ShowsWhenOpenIcon ? (
        <ShowsWhenOpenIcon sx={showsWhenOpenSx} />
      ) : (
        <Clear sx={showsWhenOpenSx} />
      )}
      {ShowsWhenCloseIcon ? (
        <ShowsWhenCloseIcon sx={showsWhenCloseSx} />
      ) : (
        <MenuOpen sx={showsWhenCloseSx} />
      )}
    </Stack>
  );
};
export default ToggleIcon;
