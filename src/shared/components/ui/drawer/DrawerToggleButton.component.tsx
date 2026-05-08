'use client';

import { LABELS } from '@/shared/constants/labels.constant';
import { opacityAnimation } from '@/shared/styles/animation/opacityAnimation.style';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { MouseEventHandler } from 'react';
import ToggleIcon from '../icon/ToggleIcon.component';

type DrawerToggleButtonProps = {
  /** ドロワーが開いている状態かどうか */
  isOpen: boolean;
  /** ドロワーの開閉状態を切り替えるクリックハンドラ */
  onClick?: MouseEventHandler<HTMLDivElement>;
};

/**
 * ドロワーの開閉操作を行うリストアイテムボタン \
 * アイコンの回転アニメーションとテキストのフェードアニメーションを内包
 * @param props {@link DrawerToggleButtonProps}
 */
const DrawerToggleButton = (props: DrawerToggleButtonProps) => {
  const { isOpen, onClick } = props;

  const theme = useTheme();

  return (
    <ListItem disablePadding>
      <ListItemButton
        sx={{
          justifyContent: 'start',
          gap: 1,
        }}
        onClick={onClick}
      >
        <ListItemIcon sx={{ minWidth: 0, position: 'relative', width: 24, height: 24 }}>
          <ToggleIcon isOpen={isOpen} />
        </ListItemIcon>
        <ListItemText
          primary={LABELS.DRAWER.CLOSE}
          sx={{
            m: 0,
            whiteSpace: 'nowrap',
            ...opacityAnimation({ isVisible: isOpen, theme }),
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};
export default DrawerToggleButton;
