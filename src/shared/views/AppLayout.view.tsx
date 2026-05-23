'use client';

import { LABELS } from '@/shared/constants/labels.constant';
import { EggOutlined, RiceBowl } from '@mui/icons-material';
import { Stack } from '@mui/material';
import { PropsWithChildren, useState } from 'react';
import AppContentWrapper from '../components/content/AppContentWrapper.component';
import AppResponsiveDrawer from '../components/drawer/AppResponsiveDrawer.component';
import { DrawerMenuListProps } from '../components/drawer/DrawerMenuList.component';
import AppHeader from '../components/header/AppHeader.component';
import { useResponsive } from '../hooks/useResponsive.hook';

/**
 * ドロワーに表示するメニューアイテムの設定リスト。 \
 * 再レンダリング時の不要な再生成を防ぐため、コンポーネント外の定数として定義。
 */
const DRAWER_ITEMS: DrawerMenuListProps['items'] = [
  {
    icon: <EggOutlined sx={{ color: (theme) => theme.palette.text.primary }} />,
    text: LABELS.DRAWER.EGG,
  },
  {
    icon: <RiceBowl sx={{ color: (theme) => theme.palette.text.primary }} />,
    text: LABELS.DRAWER.RICE,
  },
];

/**
 * アプリケーション全体の基本骨格を構築するルートレイアウトコンポーネント。
 * - `AppHeader`（ヘッダー）、`AppResponsiveDrawer`（ドロワー）、`AppContentWrapper`（コンテンツ領域）を統合・配置します。
 * - 画面サイズ（PC/モバイル）に応じた各UIの開閉状態（ステータス）を一元管理します。
 * @param props {@link PropsWithChildren}
 * @returns アプリケーションのレイアウト構造（React要素）
 */
const AppLayout = (props: PropsWithChildren) => {
  const { children } = props;

  // PCモード時の開閉ステータス
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // モバイルモード時の開閉ステータス
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  // モバイルモードか否か
  const { isMobile } = useResponsive();

  /** PCモード時のメニューアイコンクリックイベント */
  const handleClickMenu = () => {
    setIsOpen((value) => !value);
  };

  /** モバイルモード時のメニューアイコンクリックイベント */
  const handleDrawerToggle = () => {
    setMobileOpen((state) => !state);
  };

  return (
    <Stack bgcolor={(theme) => theme.palette.background.appMain} height={'100%'}>
      {/* ヘッダー */}
      <AppHeader isMobile={isMobile} isMobileOpen={mobileOpen} onMenuClick={handleDrawerToggle} />

      {/* ドロワー */}
      <AppResponsiveDrawer
        drawerItems={DRAWER_ITEMS}
        handleClickMenu={handleClickMenu}
        handleDrawerToggle={handleDrawerToggle}
        isOpen={isOpen}
        isMobile={isMobile}
        mobileOpen={mobileOpen}
      />

      {/* コンテンツ */}
      <AppContentWrapper isMobile={isMobile} isOpen={isOpen}>
        {children}
      </AppContentWrapper>
    </Stack>
  );
};
export default AppLayout;
