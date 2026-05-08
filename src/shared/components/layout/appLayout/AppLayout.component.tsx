'use client';

import { IMAGE_PATH } from '@/shared/constants/imagePath.constant';
import { LABELS } from '@/shared/constants/labels.constant';
import { LAYOUT } from '@/shared/constants/layout.constant';
import { PATH } from '@/shared/constants/path.constant';
import { EggOutlined, RiceBowl } from '@mui/icons-material';
import {
  AppBar,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, useState } from 'react';
import AvatarMenuButton from '../../ui/avatar/AvatarMenuButton.component';
import AnimatedDrawer from '../../ui/drawer/AnimatedDrawer.component';
import DrawerMenuList, { DrawerMenuListProps } from '../../ui/drawer/DrawerMenuList.component';
import ToggleIcon from '../../ui/icon/ToggleIcon.component';
import FlatPaper from '../../ui/paper/FlatPaper.component';

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
      onClick: isSmUp ? handleClickMenu : handleDrawerToggle,
    },
    {
      icon: <RiceBowl sx={{ color: (theme) => theme.palette.text.primary }} />,
      text: LABELS.DRAWER.RICE,
      onClick: isSmUp ? handleClickMenu : handleDrawerToggle,
    },
  ];

  return (
    <Stack bgcolor={(theme) => theme.palette.background.appMain} height={'100%'}>
      {/* ヘッダー */}
      <AppBar>
        <Toolbar>
          {!isSmUp && (
            <IconButton onClick={handleDrawerToggle}>
              <ToggleIcon isOpen={mobileOpen} />
            </IconButton>
          )}
          <Stack
            flex={1}
            alignItems={isSmUp ? undefined : 'center'}
            justifyContent={isSmUp ? undefined : 'center'}
          >
            <Typography
              variant={'h5'}
              component={Link}
              href={PATH.HOME}
              fontWeight={700}
              color={'textPrimary'}
              noWrap
              sx={{
                textDecoration: 'none',
                userSelect: 'none',
              }}
              width={'fit-content'}
            >
              {LABELS.COMMON.APP_TITLE}
            </Typography>
          </Stack>
          <AvatarMenuButton
            items={[
              {
                label: LABELS.HEADER.AVATAR_MENU_PROFILE,
                onClick: () => {
                  router.push(PATH.PROFILE);
                },
              },
            ]}
            src={`${PATH.BASE_PATH}${IMAGE_PATH.DUMMY_AVATAR}`}
          />
        </Toolbar>
      </AppBar>

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
