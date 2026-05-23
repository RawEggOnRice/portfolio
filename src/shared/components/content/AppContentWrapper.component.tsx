'use client';

import { widthAnimation } from '@/shared/animations/widthAnimation.animation';
import { LAYOUT } from '@/shared/constants/layout.constant';
import { Stack, Toolbar, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';
import FlatPaper from '../paper/FlatPaper.component';

/**
 * AppContentWrapperコンポーネントのプロパティ
 */
export type AppContentWrapperProps = PropsWithChildren<{
  /** モバイル画面（一定サイズ未満）かどうかの判定フラグ */
  isMobile: boolean;
  /** PC用ドロワーの展開状態（true: 展開, false: 格納） */
  isOpen: boolean;
}>;

/**
 * アプリケーションのメインコンテンツ領域をラップするレイアウトコンポーネント。
 * - ドロワーの開閉状態（`isOpen`）や画面サイズ（`isMobile`）に応じて、 \
 * ヘッダー・ドロワー分の余白を自動計算し、メインコンテンツを適切な位置に配置します。
 * @param props {@link AppContentWrapperProps}
 * @returns メインコンテンツ領域のReact要素
 */
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
