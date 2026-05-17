import { CSSObject, Theme } from '@mui/material/styles';

export type OpacityAnimationProps = {
  /** MUIテーマ */
  theme: Theme;
  /** 表示: true, 非表示: false */
  isVisible: boolean;
};

/**
 * 要素のフェードアニメーションスタイルを生成します。
 * @param props - OpacityAnimationProps
 * @returns MUIの `sx` プロパティや `styled` 関数内で展開可能なスタイルオブジェクト
 */
export const opacityAnimation = (props: OpacityAnimationProps): CSSObject => {
  const { isVisible, theme } = props;
  return {
    opacity: isVisible ? 1 : 0,
    transition: theme.transitions.create('opacity', {
      easing: theme.transitions.easing.sharp,
      duration: isVisible
        ? theme.transitions.duration.enteringScreen
        : theme.transitions.duration.leavingScreen,
    }),
  };
};
