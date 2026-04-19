'use client';

import { IMAGE_PATH } from '@/shared/constants/imagePath.constant';
import { LABELS } from '@/shared/constants/labels.constant';
import { LAYOUT } from '@/shared/constants/layout.constant';
import { PATH } from '@/shared/constants/path.constant';
import { EggOutlined, RiceBowl } from '@mui/icons-material';
import { AppBar, Paper, Stack, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, useState } from 'react';
import AvatarMenuButton from '../../ui/avatar/AvatarMenuButton.component';
import AnimatedDrawer from '../../ui/drawer/AnimatedDrawer.component';
import DrawerMenuList from '../../ui/drawer/DrawerMenuList.component';

const AppLayout = (props: PropsWithChildren) => {
  const { children } = props;

  const [drawerWidth, setDrawerWidth] = useState<number>(LAYOUT.DRAWER_WIDTH_CLOSE);

  const router = useRouter();

  const handleClickMenu = () => {
    setDrawerWidth((value) => {
      return value === LAYOUT.DRAWER_WIDTH_CLOSE
        ? LAYOUT.DRAWER_WIDTH_OPEN
        : LAYOUT.DRAWER_WIDTH_CLOSE;
    });
  };

  const isOpen = drawerWidth === LAYOUT.DRAWER_WIDTH_OPEN;

  return (
    <Stack bgcolor={(theme) => theme.palette.background.appMain} height={'100%'}>
      {/* ヘッダー */}
      <AppBar>
        <Toolbar>
          <Stack flex={1}>
            <Typography
              variant={'h6'}
              component={Link}
              href={PATH.HOME}
              fontWeight={700}
              color={'textPrimary'}
              noWrap
              sx={{
                textDecoration: 'none',
              }}
              width={'fit-content'}
            >
              {LABELS.APP_TITLE}
            </Typography>
          </Stack>
          <AvatarMenuButton
            items={[
              {
                label: LABELS.AVATAR_MENU_PROFILE,
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
      <AnimatedDrawer isOpen={isOpen} variant="permanent">
        <Toolbar />
        <DrawerMenuList
          isOpen={isOpen}
          onToggleButtonClick={handleClickMenu}
          items={[
            {
              icon: <EggOutlined sx={{ color: (theme) => theme.palette.text.primary }} />,
              text: LABELS.DRAWER_EGG,
            },
            {
              icon: <RiceBowl sx={{ color: (theme) => theme.palette.text.primary }} />,
              text: LABELS.DRAWER_RICE,
            },
          ]}
        />
      </AnimatedDrawer>

      {/* コンテンツ */}
      <Stack height={'100%'}>
        <Toolbar />
        <Stack direction={'row'} pb={1} pr={1} height={'100%'}>
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
          <Paper elevation={0} sx={{ flex: 1, height: '100%', p: 2 }}>
            {children}
          </Paper>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default AppLayout;
