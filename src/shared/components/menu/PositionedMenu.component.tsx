import { Menu, MenuItem } from '@mui/material';
import { MouseEventHandler } from 'react';

type PositionedMenuProps = {
  /** `MenuItem` に設定するプロパティ配列 */
  items: {
    /** 各 `MenuItem` のラベル */
    label: string;
    /** 各 `MenuItem` をクリックした際の個別処理 */
    onClick?: MouseEventHandler<HTMLLIElement>;
  }[];
  /** メニューの表示基準となるアンカー要素（nullで非表示） */
  anchorEl: HTMLElement | null;
  /** メニューを閉じるためのコールバック関数（項目クリック時・要素外クリック時に発火） */
  onClose: () => void;
};

/**
 * アンカー要素を基準にポップアップ表示されるメニューコンポーネント
 * @param props {@link PositionedMenuProps}
 */
const PositionedMenu = (props: PositionedMenuProps) => {
  const { items, anchorEl, onClose } = props;
  return (
    <Menu open={!!anchorEl} anchorEl={anchorEl} onClose={onClose}>
      {items.map((item, index) => {
        return (
          <MenuItem
            key={`${item.label}${index}`}
            onClick={(event) => {
              if (item.onClick) {
                item.onClick(event);
              }
              onClose();
            }}
          >
            {item.label}
          </MenuItem>
        );
      })}
    </Menu>
  );
};
export default PositionedMenu;
