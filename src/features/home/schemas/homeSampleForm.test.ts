import { describe, expect, test } from 'vitest';
import { HomeSampleFormInput, homeSampleFormSchema } from './homeSampleForm.schema';

describe('homeSampleFormSchema のバリデーションテスト', () => {
  // ----------------------------------------
  // 正常系
  // ----------------------------------------
  describe('正常系', () => {
    test('すべての必須項目が正しく入力されている場合、バリデーションが成功すること', () => {
      const validData: HomeSampleFormInput = {
        name: '山田 太郎',
        email: 'test@example.com',
        age: 30,
        remark: 'よろしくお願いします。',
      };

      const result = homeSampleFormSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    test('任意項目（remark）が空文字でも、バリデーションが成功すること', () => {
      const validData: HomeSampleFormInput = {
        name: '山田 太郎',
        email: 'test@example.com',
        age: 30,
        remark: '',
      };

      const result = homeSampleFormSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });
  });

  // ----------------------------------------
  // 異常系
  // ----------------------------------------
  describe('name（名前）の異常系', () => {
    test('名前が空文字の場合はエラーになること', () => {
      const invalidData: HomeSampleFormInput = {
        name: '',
        email: 'test@example.com',
        age: 30,
        remark: '',
      };

      const result = homeSampleFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    test('名前が51文字以上の場合はエラーになること', () => {
      const invalidData: HomeSampleFormInput = {
        name: 'a'.repeat(51),
        email: 'test@example.com',
        age: 30,
        remark: '',
      };

      const result = homeSampleFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('email（メールアドレス）の異常系', () => {
    test('形式が不正な文字列の場合はエラーになること', () => {
      const invalidData: HomeSampleFormInput = {
        name: '山田 太郎',
        email: 'not email',
        age: 30,
        remark: '',
      };

      const result = homeSampleFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('age（年齢）の異常系', () => {
    test('初期値として許容されている null のまま送信しようとした場合はエラーになること', () => {
      const invalidData: HomeSampleFormInput = {
        name: '山田 太郎',
        email: 'test@example.com',
        age: null,
        remark: '',
      };

      const result = homeSampleFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    test('マイナスの値（負の数）の場合はエラーになること', () => {
      const invalidData: HomeSampleFormInput = {
        name: '山田 太郎',
        email: 'test@example.com',
        age: -1,
        remark: '',
      };

      const result = homeSampleFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    test('少数の場合はエラーになること', () => {
      const invalidData: HomeSampleFormInput = {
        name: '山田 太郎',
        email: 'test@example.com',
        age: 29.5,
        remark: '',
      };

      const result = homeSampleFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });
});
