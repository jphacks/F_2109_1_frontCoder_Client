# Front Coder フロントエンド

サーバーサイド及び背景については[こちら](https://github.com/jphacks/F_2109)

## アーキテクチャ図

![architecture](https://user-images.githubusercontent.com/42875682/139541609-f6cd5596-700c-402f-a81a-6246da6546e6.png)

## 環境構築

以下のコードを実行すると自動でページが開きます。

```
git clone https://github.com/jphacks/F_2109_1_frontCoder_Client
npm run start
```

## 使用言語

- TypeScript + React

## 使用ライブラリ / API / サービス

- MUI
- Firebase Authentication
- Cloud Firestore

## デプロイ

フロントエンドは Amazon Amplify を使用してアップロードしています。CI/CD を利用しており、push されると自動でサーバーに後悔することができます。

## 開発方針

- ブランチ運用: [Gitflow](https://www.atlassian.com/ja/git/tutorials/comparing-workflows/gitflow-workflow)
- バージョニング: [セマンティックバージョニング](https://semver.org/lang/ja/)
- タスク管理: [Github Projects](https://github.com/jphacks/F_2109_1_frontCoder_Client/projects/1)

## ソースコードの品質担保

[husky](https://typicode.github.io/husky/#/), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [TypeScript](https://www.typescriptlang.org/)の導入によりソースコードの品質を維持しながら開発を行いました。

## 採点スコア

デザイン、コードの２項目を元に 100 点換算で点数が表示されます。

## 各ページの紹介

### トップページ

サーバー側に保存されている問題を一覧で表示します。中でも、公開されているもののみを一覧として出力しています。その問題が非公開になるまでの日程も表示されます。
<img width="1804" alt="スクリーンショット 2021-10-30 22 15 51" src="https://user-images.githubusercontent.com/54165015/139534204-7a7a8029-618a-4270-b9e9-d3cf2682e94b.png">

### 概要ページ

サーバーからその課題がどのくらいの難易度で、どのくらい制作するのに時間がかかるかを取得し、表示しています。
<img width="1716" alt="スクリーンショット 2021-10-31 14 45 32" src="https://user-images.githubusercontent.com/54165015/139569856-7e613f98-f325-44c4-af30-c2d69d826bd2.png">

### コーディングページ

コーディング画面が表示されます。左には、コーディングエディター、右には見本画像を表示しています。フッターには、経過時間とテスト実行ボタン、コード提出ボタンを用意しています。

<img width="1440" alt="スクリーンショット 2021-10-31 2 03 05" src="https://user-images.githubusercontent.com/42875682/139542318-9b54f788-273c-4a08-b771-8b1e9d4744f5.png">

### 結果画面

スコアが表示されます。
下に表示されている画像は、reg-cli が出力してくれているレポートで、提出したソースコードのプレビュー画像と見本画像の差分を表示してくれています。

<img width="1672" alt="スクリーンショット 2021-10-31 14 47 34" src="https://user-images.githubusercontent.com/54165015/139569885-8071a308-e29e-4f23-91e5-00eb216456ba.png">

### ランキング画面

FireStore に保存されている各ユーザーのスコアデータを元にフロントエンドでランキング化し、順位、スコアを出力しています。
<img width="1804" alt="スクリーンショット 2021-10-30 22 27 39" src="https://user-images.githubusercontent.com/54165015/139534563-ea3eae33-f74f-4e0a-a2d2-6e0ff51ba906.png">
