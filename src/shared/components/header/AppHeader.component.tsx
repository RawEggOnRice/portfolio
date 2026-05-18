'use client';

import { IMAGE_PATH } from '@/shared/constants/imagePath.constant';
import { LABELS } from '@/shared/constants/labels.constant';
import { PATH } from '@/shared/constants/path.constant';
import { AppBar, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MouseEventHandler } from 'react';
import AvatarMenuButton, { AvatarMenuButtonProps } from '../avatar/AvatarMenuButton.component';
import ToggleIcon from '../icon/ToggleIcon.component';

/**
 * アプリケーションヘッダーのプロパティ
 */
export type AppHeaderProps = {
  /**
   * アプリのタイトルラベル
   * @default LABELS.COMMON.APP_TITLE
   */
  appTitleLabel?: string;
  /**
   * タイトルクリック時の遷移先パス
   * @default PATH.HOME
   */
  appTitleHref?: string;
  /**
   * モバイル表示かどうかのフラグ
   * @default false
   */
  isMobile?: boolean;
  /**
   * ドロワー等のトグル状態
   * @default false
   */
  isMobileOpen?: boolean;
  /** ハンバーガーメニュー (トグルボタン) クリック時のイベントハンドラー */
  onMenuClick?: MouseEventHandler<HTMLButtonElement>;
  /** 内部コンポーネントに渡すPropsの拡張スロット */
  slotProps?: {
    /** アバターメニューボタンに渡すProps */
    avatarMenuButton?: AvatarMenuButtonProps;
  };
};

/**
 * アプリケーションの共通ヘッダーコンポーネント
 * @param props - AppHeaderProps
 * @returns 共通ヘッダー (AppBar) のJSX要素
 */
const AppHeader = (props: AppHeaderProps) => {
  const router = useRouter();

  const {
    appTitleLabel = LABELS.COMMON.APP_TITLE,
    appTitleHref = PATH.HOME,
    isMobile = false,
    isMobileOpen = false,
    onMenuClick,
    slotProps,
  } = props;

  const { avatarMenuButton } = slotProps ?? {};

  const {
    items = [
      {
        label: LABELS.HEADER.AVATAR_MENU_PROFILE,
        onClick: () => {
          router.push(PATH.PROFILE);
        },
      },
    ],
    src = `${PATH.BASE_PATH}${IMAGE_PATH.DUMMY_AVATAR}`,
  } = avatarMenuButton ?? {};

  return (
    <AppBar>
      <Toolbar>
        {isMobile && (
          <IconButton onClick={onMenuClick} aria-label={LABELS.HEADER.ARIA.TOGGLE_ICON_BUTTON}>
            <ToggleIcon isOpen={isMobileOpen} />
          </IconButton>
        )}
        <Stack
          flex={1}
          alignItems={!isMobile ? undefined : 'center'}
          justifyContent={!isMobile ? undefined : 'center'}
        >
          <Typography
            variant={'h5'}
            component={Link}
            href={appTitleHref}
            fontWeight={700}
            color={'textPrimary'}
            noWrap
            sx={{
              textDecoration: 'none',
              userSelect: 'none',
            }}
            width={'fit-content'}
          >
            {appTitleLabel}
          </Typography>
        </Stack>
        <AvatarMenuButton
          items={items}
          src={src}
          ariaLabel={LABELS.HEADER.ARIA.AVATAR_MENU_BUTTON}
        />
      </Toolbar>
    </AppBar>
  );
};
export default AppHeader;
