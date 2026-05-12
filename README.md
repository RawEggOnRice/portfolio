# Portfolio

## 概要

`Next.js (App Router)` と `MUI` を活用し、私自身が実務で使用しているフォルダ構成や技術スタックを参考に作成しているポートフォリオです。 \
一部気になった技術スタックなどについては学習しつつ作成していく予定です。(例: MSW, Vitest など) \
**[実際のデモ画面はこちら（稼働中のアプリケーション）](https://raweggonrice.github.io/portfolio/)**

## 技術スタック

![TypeScript](https://img.shields.io/badge/TypeScript-333333?style=for-the-badge&logo=TypeScript)
![Next.js](https://img.shields.io/badge/Next.js-333333?style=for-the-badge&logo=Next.js)
![React](https://img.shields.io/badge/React-333333?style=for-the-badge&logo=React)
![MUI](https://img.shields.io/badge/MUI-333333?style=for-the-badge&logo=MUI)
![Storybook](https://img.shields.io/badge/Storybook-333333?style=for-the-badge&logo=Storybook)
![Eslint](https://img.shields.io/badge/Eslint-333333?style=for-the-badge&logo=Eslint)
![Prettier](https://img.shields.io/badge/Prettier-333333?style=for-the-badge&logo=Prettier)
![Vitest](https://img.shields.io/badge/Vitest（予定）-333333?style=for-the-badge&logo=Vitest)
![RHF](https://img.shields.io/badge/RHF（予定）-333333?style=for-the-badge&logo=ReactHookForm)
![Zod](https://img.shields.io/badge/Zod（予定）-333333?style=for-the-badge&logo=Zod)
![MSW](https://img.shields.io/badge/MSW（予定）-333333?style=for-the-badge&logo=MockServiceWorker)

## ディレクトリ構成

```
src
┣━ app                # Next.js の App Router (ルーティング)
┃
┣━ features           # 各ページ専用の機能群
┃  ┣━ home            # ホーム画面専用のUIやロジック
┃  ┃  ┣━ components
┃  ┃  ┣━ constants
┃  ┃  ┗━ etc...
┃  ┣━ profile         # プロフィール画面専用のUIやロジック
┃  ┃  ┣━ components
┃  ┃  ┣━ constants
┃  ┃  ┗━ etc...
┃  ┗━ etc...
┃
┗━ shared             # アプリ全体で共有する汎用パーツ・ロジック群
   ┣━ components      # UIやLayoutに使用するコンポーネント
   ┣━ constants       # ラベルやパスなどの定数
   ┣━ hooks           # カスタムフック
   ┣━ providers       # コンテキストなどのプロバイダー
   ┣━ styles          # コンポーネントのスタイリング
   ┣━ types           # 型
   ┣━ utils           # ユーティリティ
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
