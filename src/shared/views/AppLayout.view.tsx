'use client';

import AppContentWrapper from '@/shared/components/content/AppContentWrapper.component';
import AppResponsiveDrawer from '@/shared/components/drawer/AppResponsiveDrawer.component';
import { DrawerMenuListProps } from '@/shared/components/drawer/DrawerMenuList.component';
import AppHeader from '@/shared/components/header/AppHeader.component';
import { LABELS } from '@/shared/constants/labels.constant';
import { PATH } from '@/shared/constants/path.constant';
import { useResponsive } from '@/shared/hooks/useResponsive.hook';
import { EggOutlined, RiceBowl } from '@mui/icons-material';
import { Stack } from '@mui/material';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, useMemo, useState } from 'react';

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
  // 遷移
  const router = useRouter();

  /** ドロワーに表示するメニューアイテムの設定リスト。 */
  const drawerItems: DrawerMenuListProps['items'] = useMemo(
    () => [
      {
        icon: <EggOutlined sx={{ color: (theme) => theme.palette.text.primary }} />,
        text: LABELS.DRAWER.EGG,
        onClick: () => {
          router.push(PATH.EGG);
        },
      },
      {
        icon: <RiceBowl sx={{ color: (theme) => theme.palette.text.primary }} />,
        text: LABELS.DRAWER.RICE,
      },
    ],
    [router],
  );

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
        drawerItems={drawerItems}
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
