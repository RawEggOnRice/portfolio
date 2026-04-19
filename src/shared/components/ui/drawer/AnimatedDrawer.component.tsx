import { LAYOUT } from '@/shared/constants/layout.constant';
import {
  widthAnimation,
  WidthAnimationProps,
} from '@/shared/styles/animation/widthAnimation.style';
import { Drawer, styled } from '@mui/material';

type AnimatedDrawerProps = {
  /** ドロワーを展開するかどうかの真偽値（trueで展開、falseで折りたたみ） */
  isOpen?: boolean;
};

/**
 * `isOpen` プロパティに応じて幅が滑らかに伸縮するカスタムDrawerコンポーネント
 * @param props MUIの標準 `DrawerProps` に加え、独自プロパティ {@link AnimatedDrawerProps}
 */
const AnimatedDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => {
    return prop !== 'isOpen';
  },
})<AnimatedDrawerProps>(({ theme, isOpen }) => {
  const widthAnimationData: WidthAnimationProps = {
    theme,
    isExpanded: isOpen ?? false,
    expandedWidth: LAYOUT.DRAWER_WIDTH_OPEN,
    collapsedWidth: LAYOUT.DRAWER_WIDTH_CLOSE,
  };
  return {
    flexShrink: 0,
    whiteSpace: 'nowrap',
    ...widthAnimation(widthAnimationData),
    '& .MuiDrawer-paper': {
      ...widthAnimation(widthAnimationData),
      overflowX: 'hidden',
    },
  };
});
export default AnimatedDrawer;
