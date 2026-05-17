import useMenu from '@/shared/hooks/useMenu.hook';
import { Avatar, ButtonBase } from '@mui/material';
import { MouseEventHandler } from 'react';
import PositionedMenu from '../menu/PositionedMenu.component';

type AvatarMenuButtonProps = {
  /** アバタークリック時に表示されるメニューアイテムの配列 */
  items: {
    /** 各メニューの表示ラベル */
    label: string;
    /** 各項目をクリックした際の個別処理 */
    onClick?: MouseEventHandler<HTMLLIElement>;
  }[];
  src?: string;
};

/**
 * ポップアップメニュー付きのアバターボタンコンポーネント
 * @param props {@link AvatarMenuButtonProps}
 */
const AvatarMenuButton = (props: AvatarMenuButtonProps) => {
  const { items, src } = props;
  const { anchorEl, onClose, onOpen } = useMenu();

  return (
    <>
      <ButtonBase sx={{ borderRadius: '50%' }} onClick={onOpen}>
        <Avatar sx={{ width: 32, height: 32 }} src={src} />
      </ButtonBase>
      <PositionedMenu items={items} anchorEl={anchorEl} onClose={onClose} />
    </>
  );
};
export default AvatarMenuButton;
