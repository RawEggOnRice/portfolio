'use client';

import { LABELS } from '@/shared/constants/labels.constant';
import { LAYOUT } from '@/shared/constants/layout.constant';
import { EggOutlined, RiceBowl } from '@mui/icons-material';
import { Stack, Toolbar } from '@mui/material';
import { PropsWithChildren, useState } from 'react';
import AppResponsiveDrawer from '../components/drawer/AppResponsiveDrawer.component';
import { DrawerMenuListProps } from '../components/drawer/DrawerMenuList.component';
import AppHeader from '../components/header/AppHeader.component';
import FlatPaper from '../components/paper/FlatPaper.component';
import { useResponsive } from '../hooks/useResponsive.hook';

const AppLayout = (props: PropsWithChildren) => {
  const { children } = props;

  const [drawerWidth, setDrawerWidth] = useState<number>(LAYOUT.DRAWER_WIDTH_CLOSE);

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((state) => !state);
  };

  const { isMobile } = useResponsive();

  const handleClickMenu = () => {
    setDrawerWidth((value) => {
      return value === LAYOUT.DRAWER_WIDTH_CLOSE
        ? LAYOUT.DRAWER_WIDTH_OPEN
        : LAYOUT.DRAWER_WIDTH_CLOSE;
    });
  };

  const isOpen = drawerWidth === LAYOUT.DRAWER_WIDTH_OPEN;

  const drawerItems: DrawerMenuListProps['items'] = [
    {
      icon: <EggOutlined sx={{ color: (theme) => theme.palette.text.primary }} />,
      text: LABELS.DRAWER.EGG,
      onClick: () => {},
    },
    {
      icon: <RiceBowl sx={{ color: (theme) => theme.palette.text.primary }} />,
      text: LABELS.DRAWER.RICE,
      onClick: () => {},
    },
  ];

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
      <Stack height={'100vh'}>
        {/* ヘッダー部分のスペース */}
        <Toolbar />
        <Stack
          direction={'row'}
          pb={!isMobile ? 1 : 0}
          pr={!isMobile ? 1 : 0}
          height={`calc(100vh - ${LAYOUT.HEADER_HEIGHT}px)`}
        >
          {/* ドロワー部分のスペース */}
          {!isMobile && (
            <Stack
              width={drawerWidth}
              flexShrink={0}
              sx={{
                transition: (theme) =>
                  theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: isOpen
                      ? theme.transitions.duration.enteringScreen
                      : theme.transitions.duration.leavingScreen,
                  }),
              }}
            />
          )}
          <FlatPaper
            isDefaultBackground
            width={'100%'}
            height={'100%'}
            sx={{
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Stack flex={'1  0 auto'} sx={{ '& > *': { flex: '1 0 auto' } }}>
              {children}
            </Stack>
          </FlatPaper>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default AppLayout;
