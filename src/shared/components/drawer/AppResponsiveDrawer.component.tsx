'use client';

import { LAYOUT } from '@/shared/constants/layout.constant';
import { Drawer, Toolbar } from '@mui/material';
import AnimatedDrawer from './AnimatedDrawer.component';
import DrawerMenuList, { DrawerMenuListProps } from './DrawerMenuList.component';

/**
 * AppResponsiveDrawerコンポーネントのプロパティ
 */
export type AppResponsiveDrawerProps = {
  /** モバイル画面（smサイズ未満）かどうかの判定フラグ */
  isMobile: boolean;
  /** PC画面用ドロワーの開閉状態 */
  isOpen: boolean;
  /** モバイル画面用ドロワー（一時表示）の開閉状態 */
  mobileOpen: boolean;
  /** ドロワー内に表示するメニューアイテムのリスト */
  drawerItems: DrawerMenuListProps['items'];
  /** モバイル用ドロワーの開閉を切り替えるハンドラ関数 */
  handleDrawerToggle: () => void;
  /** PC用ドロワーの開閉を切り替えるハンドラ関数 */
  handleClickMenu: () => void;
};

/**
 * レスポンシブ対応のドロワー（サイドバー）コンポーネント
 * - 画面幅（`isMobile`）に応じて、PC用の常時配置ドロワー（AnimatedDrawer）と \
 * モバイル用の一時表示ドロワー（MUI Drawer）のUIを自動で切り替えます。
 */
const AppResponsiveDrawer = (props: AppResponsiveDrawerProps) => {
  const { isMobile, isOpen, mobileOpen, drawerItems, handleDrawerToggle, handleClickMenu } = props;

  // PCサイズの場合
  if (!isMobile) {
    return (
      <AnimatedDrawer isOpen={isOpen} variant="permanent">
        <Toolbar />
        <DrawerMenuList isOpen={isOpen} onToggleButtonClick={handleClickMenu} items={drawerItems} />
      </AnimatedDrawer>
    );
  }

  // モバイルサイズの場合
  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        '& .MuiDrawer-paper': {
          width: LAYOUT.DRAWER_WIDTH_OPEN,
        },
      }}
    >
      <Toolbar />
      <DrawerMenuList
        isOpen={mobileOpen}
        onToggleButtonClick={handleDrawerToggle}
        items={drawerItems}
        isHide
      />
    </Drawer>
  );
};
export default AppResponsiveDrawer;
