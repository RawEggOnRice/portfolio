import { SxProps, Theme } from '@mui/material/styles';

// 返り値が `any[]` にならないようにするために使用
type SxArray = Extract<SxProps<Theme>, readonly unknown[]>;

/**
 * `sxProps` を配列の形式で合成したい時に使用します。
 * @param sx
 * @returns
 * @example
 * <Box sx={[{p: 2}, ...mergeSx(sx)]} />
 */
export const mergeSx = (sx: SxProps<Theme> | undefined): SxArray =>
  // MUIのSxPropsの型が複雑なため、TypeScriptの推論が追いきれずasで対応
  (sx ? (Array.isArray(sx) ? sx : [sx]) : []) as SxArray;
