import { CSSObject, Theme } from '@mui/material/styles';

export type ToggleIconAnimationProps = {
  /** MUIテーマ */
  theme: Theme;
  /** ドロワーが開いているか */
  isOpen: boolean;
  /** ドロワーが開いているに時に表示するなら true */
  showsWhenOpen: boolean;
};

/**
 * ドロワーの開閉操作を行うボタンのアニメーション
 * @param props ToggleIconAnimationProps
 * @returns MUIの `sx` プロパティや `styled` 関数内で展開可能なスタイルオブジェクト
 */
export const toggleIconAnimation = (props: ToggleIconAnimationProps): CSSObject => {
  const { theme, isOpen, showsWhenOpen } = props;

  return {
    opacity: isOpen === showsWhenOpen ? 1 : 0,
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: theme.transitions.create(['transform', 'opacity'], {
      easing: theme.transitions.easing.sharp,
      duration: isOpen
        ? theme.transitions.duration.enteringScreen
        : theme.transitions.duration.leavingScreen,
    }),
  };
};
