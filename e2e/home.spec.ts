import { expect, test } from '@playwright/test';

const TARGET_URL = 'http://localhost:3000/portfolio/';

test('ホーム画面のフォームで正常にデータが入力され、送信できること', async ({ page }) => {
  // 対象ページにアクセス
  await page.goto(TARGET_URL);

  // フォームの各項目に入力
  await page.fill('input[name="name"]', '山田 太郎');
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="age"]', '30');
  await page.fill('input[name="remark"]', 'Playwrightからの自動テスト送信です！');

  // ダイアログ待機
  const dialogPromise = page.waitForEvent('dialog');

  await page.getByRole('button', { name: '確定' }).click();

  const dialog = await dialogPromise;
  expect(dialog.message()).toContain('山田 太郎');
  await dialog.accept();
});
