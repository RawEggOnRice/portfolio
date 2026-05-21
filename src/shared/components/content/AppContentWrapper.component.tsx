'use client';

import { widthAnimation } from '@/shared/animations/widthAnimation.animation';
import { LAYOUT } from '@/shared/constants/layout.constant';
import { Stack, Toolbar, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';
import FlatPaper from '../paper/FlatPaper.component';

export type AppContentWrapperProps = PropsWithChildren<{
  isMobile: boolean;
  isOpen: boolean;
}>;

const AppContentWrapper = (props: AppContentWrapperProps) => {
  const { isMobile, isOpen, children } = props;

  const theme = useTheme();

  return (
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
            flexShrink={0}
            sx={widthAnimation({
              collapsedWidth: LAYOUT.DRAWER_WIDTH_CLOSE,
              expandedWidth: LAYOUT.DRAWER_WIDTH_OPEN,
              isExpanded: isOpen,
              theme: theme,
            })}
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
  );
};
export default AppContentWrapper;
