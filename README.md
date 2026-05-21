# Portfolio

## 概要

`Next.js (App Router)` と `MUI` を活用し、私自身が実務で使用しているフォルダ構成や技術スタックを参考に作成しているポートフォリオです。 \
一部気になった技術スタックなどについては学習しつつ作成していく予定です。(例: MSW, Vitest など) \
**[実際のデモ画面はこちら（稼働中のアプリケーション）](https://raweggonrice.github.io/portfolio/)**
**[Storybookこちら](https://raweggonrice.github.io/portfolio/storybook/?path=/docs/component-avatar-avatarmenubutton--docs)**

## 技術スタック

![TypeScript](https://img.shields.io/badge/TypeScript-333333?style=for-the-badge&logo=TypeScript)
![Next.js](https://img.shields.io/badge/Next.js-333333?style=for-the-badge&logo=Next.js)
![React](https://img.shields.io/badge/React-333333?style=for-the-badge&logo=React)
![MUI](https://img.shields.io/badge/MUI-333333?style=for-the-badge&logo=MUI)
![Storybook](https://img.shields.io/badge/Storybook-333333?style=for-the-badge&logo=Storybook)
![Eslint](https://img.shields.io/badge/Eslint-333333?style=for-the-badge&logo=Eslint)
![Prettier](https://img.shields.io/badge/Prettier-333333?style=for-the-badge&logo=Prettier)
![Vitest](https://img.shields.io/badge/Vitest-333333?style=for-the-badge&logo=Vitest)
![RHF](https://img.shields.io/badge/RHF（予定）-333333?style=for-the-badge&logo=ReactHookForm)
![Zod](https://img.shields.io/badge/Zod（予定）-333333?style=for-the-badge&logo=Zod)
![MSW](https://img.shields.io/badge/MSW（予定）-333333?style=for-the-badge&logo=MockServiceWorker)

## ディレクトリ構成

- `shared` と `features/xxx` 以下のディレクトリ構成は原則として同様の構造とし、 `features` 内部には必要に応じてディレクトリを配置します。
- 下記のルールを守れるよう `eslint-plugin-boundaries` を利用し違反時にlintエラーが出るようにしました。

### 参照の許可と禁止

- ドメイン間の密結合や循環参照を防ぐため、以下の依存関係ルールを設けています。
- 参照が許可されるのは、以下の **【ドメイン制約】と【レイヤー制約】の両方を満たした場合のみ** です。

#### 参照許可条件

**1. ドメイン制約**

- `shared` → `shared`
- `features/xxx` → `shared`
- `features/xxx` → `features/xxx` (同一ドメイン内)

**2. レイヤー制約 (単方向依存)**

- **[参照元の優先順位番号] < [参照先の優先順位番号]**
  - 例: `1. views` から `2. components` への参照は許可
  - 同一ディレクトリ内のファイル同士の参照は除く

#### 参照禁止条件

- `shared` → `features/xxx` (逆方向依存)
- `features/xxx` → `features/yyy` (ドメインをまたぐ横方向の依存)
- **[参照元の優先順位番号] >= [参照先の優先順位番号]**
  - 例1: `2. components` から `1. views` への参照は禁止 (下位から上位への依存)
  - 例2: 同位である `7. animations` と `7. contexts` 間の相互参照は禁止
  - 例3: `features/xxx/components` (レイヤー2) から `shared/views` (レイヤー1) への参照は禁止

### 参照の優先順位

- 数値が小さいほど上位レイヤー、大きいほど下位レイヤーとし、**単方向の依存関係**を強制します。
- 優先順位
  1.  `views`
  2.  `components`
  3.  `providers`
  4.  `hooks`
  5.  `apis`
  6.  `utils`
  7.  `animations, contexts`
  8.  `types`
  9.  `schemas`
  10. `themes`
  11. `constants`

```
src
┣━ app                  # Next.js の App Router (ルーティング)
┃  ┣━ (home)
┃  ┣━ profile
┃  ┗━ etc...
┃
┣━ features             # 各ページ専用の機能群
┃  ┣━ home              # ホーム画面専用のUIやロジック
┃  ┃  ┣━ apis
┃  ┃  ┣━ components
┃  ┃  ┣━ constants
┃  ┃  ┣━ views
┃  ┃  ┗━ etc...
┃  ┣━ profile           # プロフィール画面専用のUIやロジック
┃  ┃  ┣━ apis
┃  ┃  ┣━ components
┃  ┃  ┣━ constants
┃  ┃  ┣━ views
┃  ┃  ┗━ etc...
┃  ┗━ etc...
┃
┗━ shared               # アプリ全体で共有する汎用パーツ・ロジック群
   ┣━ animations        # アニメーション定義
   ┣━ apis              # API
   ┣━ components        # カスタムUIコンポーネント
   ┣━ constants         # ラベルやパスなどの定数
   ┣━ contexts          # React Context
   ┣━ hooks             # カスタムフック
   ┣━ providers         # コンテキストなどのプロバイダー
   ┣━ schemas           # バリデーションスキーマ
   ┣━ themes            # MUIテーマ・コンポーネントオーバーライド
   ┃  ┗━ muiComponents  # コンポーネントオーバーライド
   ┣━ types             # 共通型定義
   ┣━ utils             # ユーティリティ関数
   ┣━ views             # 共通のレイアウト
   ┗━ etc...
```

## セットアップ

### インストール

```bash
npm install
```

### 開発サーバー起動

```bash
npm run dev
```

### Storybook 起動

```bash
npm run storybook
```
