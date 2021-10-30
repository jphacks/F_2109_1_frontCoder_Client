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

- Material ui
- Firebase Auth
- Firebase FireStore

## 概要

フロントエンドは Amazon Amplify を使用してアップロードしています。CI/CD を利用しており、push されると自動でサーバーに後悔することができます。

## 採点スコア

デザイン、コードの２項目を元に 100 点換算で点数が表示されます。

## 各ページの紹介

### トップページ

サーバー側に保存されている問題を一覧で表示します。中でも、公開されているもののみを一覧として出力しています。その問題が非公開になるまでの日程も表示されます。
<img width="1804" alt="スクリーンショット 2021-10-30 22 15 51" src="https://user-images.githubusercontent.com/54165015/139534204-7a7a8029-618a-4270-b9e9-d3cf2682e94b.png">

### 概要ページ

サーバーからその課題がどのくらいの難易度で、どのくらい制作するのに時間がかかるかを取得し、表示しています。
<img width="1804" alt="スクリーンショット 2021-10-30 22 18 19" src="https://user-images.githubusercontent.com/54165015/139534276-990b1314-df8a-419f-ac81-8daa6f543f3b.png">

### コーディングページ

コーディング画面が表示されます。左には、コーディングエディター、右には見本画像を表示しています。フッターには、経過時間とテスト実行ボタン、コード提出ボタンを用意しています。

<img width="1440" alt="スクリーンショット 2021-10-31 2 03 05" src="https://user-images.githubusercontent.com/42875682/139542318-9b54f788-273c-4a08-b771-8b1e9d4744f5.png">


### 結果画面

スコアが表示されます。
下に表示されている画像は、reg-cli が出力してくれているレポートで、提出したソースコードのプレビュー画像と見本画像の差分を表示してくれています。

---

<img width="1804" alt="スクリーンショット 2021-10-30 22 22 56" src="https://user-images.githubusercontent.com/54165015/139534409-6f35170a-9f28-4a05-aef1-4871a2ce54ac.png">

### ランキング画面

FireStore に保存されている各ユーザーのスコアデータを元にフロントエンドでランキング化し、順位、スコアを出力しています。
<img width="1804" alt="スクリーンショット 2021-10-30 22 27 39" src="https://user-images.githubusercontent.com/54165015/139534563-ea3eae33-f74f-4e0a-a2d2-6e0ff51ba906.png">
