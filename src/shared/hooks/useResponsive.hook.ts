'use client';

import { useMediaQuery, useTheme } from '@mui/material';

/**
 * レスポンシブ対応のための画面幅判定を提供するカスタムフック
 *
 * @returns {object} 画面幅の判定結果を含むオブジェクト
 * - isMobile: boolean - 画面幅がsm(600px)未満（スマホサイズ）の場合にtrueを返す
 */
export const useResponsive = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return {
    /** `true` ならモバイル画面 */
    isMobile,
  };
};
