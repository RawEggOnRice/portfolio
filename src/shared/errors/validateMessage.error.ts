export const VALIDATE_MESSAGE = {
  REQUIRED: '必須項目です',
  INVALID_EMAIL: '正しいメールアドレス形式で入力してください',
  /** ${min}文字以上で入力してください */
  MIN_LENGTH: (min: number) => `${min}文字以上で入力してください`,
  /** ${max}文字以下で入力してください */
  MAX_LENGTH: (max: number) => `${max}文字以下で入力してください`,
  INVALID_TYPE_STRING: '文字列で入力してください',
  INVALID_TYPE_NUMBER: '数値で入力してください',
} as const;
