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

/** ドロワーアイテム設定 */
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
