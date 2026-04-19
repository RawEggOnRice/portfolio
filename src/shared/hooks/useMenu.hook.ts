'use client';

import { MouseEvent, useState } from 'react';

type UseMenuReturn = {
  /** `PositionedMenu` の `anchorEl` プロパティに渡す値 */
  anchorEl: HTMLElement | null;
  /** メニューを開くボタンに配置する関数 */
  onOpen: (event: MouseEvent<HTMLElement>) => void;
  /** `PositionedMenu` の `onClose` プロパティに渡す関数 */
  onClose: () => void;
};

/**
 * `PositionedMenu` コンポーネントの開閉状態とイベントを管理するカスタムフック
 * @returns メニューの表示位置と、開閉用の制御関数を含むオブジェクト: {@link UseMenuReturn}
 */
const useMenu = (): UseMenuReturn => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const onOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  return { anchorEl, onOpen, onClose };
};
export default useMenu;
