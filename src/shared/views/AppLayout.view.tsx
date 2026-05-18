'use client';

import { LABELS } from '@/shared/constants/labels.constant';
import { LAYOUT } from '@/shared/constants/layout.constant';
import { EggOutlined, RiceBowl } from '@mui/icons-material';
import { Drawer, Stack, Toolbar, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, useState } from 'react';
import AnimatedDrawer from '../components/drawer/AnimatedDrawer.component';
import DrawerMenuList, { DrawerMenuListProps } from '../components/drawer/DrawerMenuList.component';
import AppHeader from '../components/header/AppHeader.component';
import FlatPaper from '../components/paper/FlatPaper.component';

const AppLayout = (props: PropsWithChildren) => {
  const { children } = props;

  const [drawerWidth, setDrawerWidth] = useState<number>(LAYOUT.DRAWER_WIDTH_CLOSE);

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((state) => !state);
  };

  const router = useRouter();

  const isSmUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));

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
      <AppHeader isMobile={!isSmUp} isMobileOpen={mobileOpen} onMenuClick={handleDrawerToggle} />

      {/* ドロワー */}
      {isSmUp ? (
        <AnimatedDrawer isOpen={isOpen} variant="permanent">
          <Toolbar />
          <DrawerMenuList
            isOpen={isOpen}
            onToggleButtonClick={handleClickMenu}
            items={drawerItems}
          />
        </AnimatedDrawer>
      ) : (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
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
      )}

      {/* コンテンツ */}
      <Stack height={'100vh'}>
        {/* ヘッダー部分のスペース */}
        <Toolbar />
        <Stack
          direction={'row'}
          pb={isSmUp ? 1 : 0}
          pr={isSmUp ? 1 : 0}
          height={`calc(100vh - ${LAYOUT.HEADER_HEIGHT}px)`}
        >
          {/* ドロワー部分のスペース */}
          {isSmUp && (
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
