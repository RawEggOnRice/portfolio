'use client';

import { opacityAnimation } from '@/shared/styles/animation/opacityAnimation.style';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { JSX, MouseEventHandler } from 'react';
import DrawerToggleButton from './DrawerToggleButton.component';

type DrawerMenuListProps = {
  /** ドロワーが開いてる状態かどうか */
  isOpen: boolean;
  /** ドロワーの開閉状態を切り替えるクリックハンドラ */
  onToggleButtonClick?: MouseEventHandler<HTMLDivElement>;
  /** メニューとして描画するアイテムの配列 */
  items: {
    text: string;
    icon?: JSX.Element;
    onClick?: MouseEventHandler<HTMLDivElement>;
  }[];
};

/**
 * 先頭に開閉用トグルボタンを配置し、その下に `items` を展開します。
 * @param props {@link DrawerMenuListProps}
 */
const DrawerMenuList = (props: DrawerMenuListProps) => {
  const { items, isOpen, onToggleButtonClick } = props;

  const theme = useTheme();

  return (
    <List>
      <DrawerToggleButton isOpen={isOpen} onClick={onToggleButtonClick} />
      {items.map((item, index) => (
        <ListItem key={`${item.text}${index}`} disablePadding>
          <ListItemButton sx={{ justifyContent: 'start', gap: 1 }} onClick={item.onClick}>
            {item.icon && (
              <ListItemIcon sx={{ minWidth: 0, width: 24, height: 24 }}>{item.icon}</ListItemIcon>
            )}
            <ListItemText
              sx={{
                m: 0,
                whiteSpace: 'nowrap',
                ...opacityAnimation({ isVisible: isOpen, theme }),
              }}
            >
              {item.text}
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
export default DrawerMenuList;
