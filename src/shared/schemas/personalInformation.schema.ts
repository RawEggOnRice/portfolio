import { VALIDATE_MESSAGE } from '@/shared/errors/validateMessage.error';
import z from 'zod';

/**
 * 名前
 * @description
 * 必須。最大50文字。
 */
const nameSchema = z
  .string({
    error: (context) => {
      if ((context.input ?? '') === '') {
        return VALIDATE_MESSAGE.REQUIRED;
      }
      return VALIDATE_MESSAGE.INVALID_TYPE_STRING;
    },
  })
  .min(1, { error: VALIDATE_MESSAGE.REQUIRED })
  .max(50, { error: VALIDATE_MESSAGE.MAX_LENGTH(50) });

/**
 * メールアドレス
 * @description
 * 必須。最大200文字。
 */
const emailSchema = z
  .email({
    error: (context) => {
      if ((context.input ?? '') === '') {
        return VALIDATE_MESSAGE.REQUIRED;
      }
      return VALIDATE_MESSAGE.INVALID_EMAIL;
    },
  })
  .min(1, { error: VALIDATE_MESSAGE.REQUIRED })
  .max(254, { error: VALIDATE_MESSAGE.MAX_LENGTH(254) });

/**
 * 年齢
 * @description
 * 必須。 \
 * React Hook Form の Uncontrolled 警告を回避するための `null` 初期値を許容しつつ、 \
 * 最終的な送信時には必須（null以外）とするため、nullable().refine() を使用しています。
 */
const ageSchema = z
  .number({
    error: (ctx) => {
      if (ctx.input === undefined || ctx.input === null) {
        return VALIDATE_MESSAGE.REQUIRED;
      }
      if (ctx.code === 'invalid_type') {
        return VALIDATE_MESSAGE.INVALID_TYPE_NUMBER;
      }
      return VALIDATE_MESSAGE.REQUIRED;
    },
  })
  .nonnegative({ error: VALIDATE_MESSAGE.INVALID_NUMBER_NONNEGATIVE })
  .int({ error: VALIDATE_MESSAGE.INVALID_NUMBER_INT })
  .nullable()
  .refine((value) => value !== null, { error: VALIDATE_MESSAGE.REQUIRED });

/**
 * 備考
 * @description
 * 任意。
 */
const remarkSchema = z.string();

/**
 * 個人情報系 共通スキーマ
 * @description
 * 各画面のフォームスキーマ（`z.object`）を構築するためのベーススキーマ集です。 \
 * 必要なプロパティを組み合わせて使用します。
 */
export const personalInformationSchemaIndex = {
  ageSchema,
  emailSchema,
  remarkSchema,
  nameSchema,
};
