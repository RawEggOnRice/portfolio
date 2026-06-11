import PositionedMenu from '@/shared/components/menu/PositionedMenu.component';
import { A11Y } from '@/shared/constants/a11y.constant';
import useMenu from '@/shared/hooks/useMenu.hook';
import { Avatar, ButtonBase } from '@mui/material';
import { MouseEventHandler } from 'react';

export type AvatarMenuButtonProps = {
  /** アバタークリック時に表示されるメニューアイテムの配列 */
  items: {
    /** 各メニューの表示ラベル */
    label: string;
    /** 各項目をクリックした際の個別処理 */
    onClick?: MouseEventHandler<HTMLLIElement>;
  }[];
  src?: string;
  ariaLabel?: string;
};

/**
 * ポップアップメニュー付きのアバターボタンコンポーネント
 * @param props {@link AvatarMenuButtonProps}
 */
const AvatarMenuButton = (props: AvatarMenuButtonProps) => {
  const { items, src, ariaLabel = A11Y.ARIA_LABEL.AVATAR } = props;
  const { anchorEl, onClose, onOpen } = useMenu();

  return (
    <>
      <ButtonBase sx={{ borderRadius: '50%' }} onClick={onOpen} aria-label={ariaLabel}>
        <Avatar sx={{ width: 32, height: 32 }} src={src} alt={src && A11Y.ALT.AVATAR} />
      </ButtonBase>
      <PositionedMenu items={items} anchorEl={anchorEl} onClose={onClose} />
    </>
  );
};
export default AvatarMenuButton;
