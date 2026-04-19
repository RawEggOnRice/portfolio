import { CSSObject, Theme } from '@mui/material/styles';

export type WidthAnimationProps = {
  /** MUIテーマ */
  theme: Theme;
  /** 展開: true, 格納: false */
  isExpanded: boolean;
  /** 展開時サイズ */
  expandedWidth: string | number;
  /** 格納時サイズ */
  collapsedWidth: string | number;
};

/**
 * width要素の伸縮アニメーションスタイルを生成します。
 * @param props WidthAnimationProps
 * @returns MUIの `sx` プロパティや `styled` 関数内で展開可能なスタイルオブジェクト
 */
export const widthAnimation = (props: WidthAnimationProps): CSSObject => {
  const { collapsedWidth, expandedWidth, isExpanded, theme } = props;

  return {
    width: isExpanded ? expandedWidth : collapsedWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: isExpanded
        ? theme.transitions.duration.enteringScreen
        : theme.transitions.duration.leavingScreen,
    }),
  };
};
