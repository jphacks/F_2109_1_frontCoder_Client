# Front Coder フロントエンド
サーバーサイド及び背景についてはこちら
## 概要
アーキテクチャ図とか貼りたい
https://app.cloudskew.com/viewer/c1b5c65b-eadf-4afa-90e6-f3e4daf3247c

## 情報
```
公開済みURL :  ここに貼って。
```

## 実装方法
以下のコードを実行すると自動でページが開きます。
```
git clone https://github.com/jphacks/F_2109_1_frontCoder_Client
npm run start
```

## 使用推奨デバイス
 - PC

## 使用言語
 - TypeScript + React


## 使用ライブラリ / API / サービス
 - Material ui
 - Firebase Auth
 - Firebase FireStore
 - CodeSandBox API

## 概要
フロントエンドはAmazon Amplifyを使用してアップロードしています。CI/CDを利用しており、pushされると自動でサーバーに後悔することができます。

## 採点スコアの導出方法
デザイン、コードの２項目を元に100点換算で点数が表示されます。
具体的にデザインは////////////////////.
コードは////////////////////////////.
このようにして判断しています。

## ファイル構造の説明
```
.
├── README.md
├── amplify
│   ├── README.md
│   ├── backend
│   │   ├── backend-config.json
│   │   ├── hosting
│   │   │   └── amplifyhosting
│   │   │       └── amplifyhosting-template.json
│   │   └── tags.json
│   ├── cli.json
│   ├── hooks
│   │   └── README.md
│   └── team-provider-info.json
├── cypress
│   ├── fixtures
│   │   └── example.json
│   ├── integration
│   │   ├── 1-getting-started
│   │   │   └── todo.spec.js
│   │   ├── 2-advanced-examples
│   │   │   ├── actions.spec.js
│   │   │   ├── aliasing.spec.js
│   │   │   ├── assertions.spec.js
│   │   │   ├── connectors.spec.js
│   │   │   ├── cookies.spec.js
│   │   │   ├── cypress_api.spec.js
│   │   │   ├── files.spec.js
│   │   │   ├── local_storage.spec.js
│   │   │   ├── location.spec.js
│   │   │   ├── misc.spec.js
│   │   │   ├── navigation.spec.js
│   │   │   ├── network_requests.spec.js
│   │   │   ├── querying.spec.js
│   │   │   ├── spies_stubs_clocks.spec.js
│   │   │   ├── traversal.spec.js
│   │   │   ├── utilities.spec.js
│   │   │   ├── viewport.spec.js
│   │   │   ├── waiting.spec.js
│   │   │   └── window.spec.js
│   │   └── index.spec.js
│   ├── plugins
│   │   └── index.js
│   └── support
│       ├── commands.js
│       └── index.js
├── cypress.json
├── package-lock.json
├── package.json
├── public
├── src
│   ├── App.tsx
│   ├── api
│   │   ├── closeProblem.ts
│   │   ├── endpoint.ts
│   │   ├── fetchProblem.ts
│   │   ├── fetchProblems.ts
│   │   ├── getScore.ts
│   │   └── uploadFile.ts
│   ├── components
│   │   ├── ActionAreaCard.tsx
│   │   ├── Codesandbox.tsx
│   │   ├── DescriptionCard.tsx
│   │   ├── Detail.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Login.tsx
│   │   ├── RankingList.tsx
│   │   ├── SampleView.tsx
│   │   ├── StopWatch.tsx
│   │   ├── detail
│   │   │   ├── DetailItem.tsx
│   │   │   └── TechnologyChip.tsx
│   │   ├── icon.png
│   │   └── logo.png
│   ├── config
│   │   └── firebase.ts
│   ├── const
│   │   └── pages.ts
│   ├── css
│   │   ├── coding.css
│   │   └── index.css
│   ├── function
│   │   └── Auth.tsx
│   ├── images
│   │   └── thumbnail.png
│   ├── index.tsx
│   ├── logo.svg
│   ├── pages
│   │   ├── CompetitionsList.tsx
│   │   ├── Ranking.tsx
│   │   ├── RequireLogin.tsx
│   │   ├── coding.tsx
│   │   └── score.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   ├── types
│   └── utils
├── tsconfig.json
└── yarn.lock

```
うーんなんか出してみたけど書くことないよな
なんかあったら書いて！

## 各ページの紹介
### トップページ
　サーバー側に保存されている問題を一覧で表示します。中でも、公開されているもののみを一覧として出力しています。その問題が非公開になるまでの日程も表示されます。
<img width="1804" alt="スクリーンショット 2021-10-30 22 15 51" src="https://user-images.githubusercontent.com/54165015/139534204-7a7a8029-618a-4270-b9e9-d3cf2682e94b.png">

### 概要ページ
サーバーからその課題がどのくらいの難易度で、どのくらい制作するのに時間がかかるかを取得し、表示しています。
<img width="1804" alt="スクリーンショット 2021-10-30 22 18 19" src="https://user-images.githubusercontent.com/54165015/139534276-990b1314-df8a-419f-ac81-8daa6f543f3b.png">

### コーディングページ
![Uploading スクリーンショット 2021-10-30 22.12.51.png…]()

### 結果画面
スコアが表示されます。採点基準の説明はこちら
下に表示されている画像は、reg-cliのレポーと>?????
Firestoreに保存
*****************************************
<img width="1804" alt="スクリーンショット 2021-10-30 22 22 56" src="https://user-images.githubusercontent.com/54165015/139534409-6f35170a-9f28-4a05-aef1-4871a2ce54ac.png">

### ランキング画面
FireStoreに保存されている各ユーザーのスコアデータを元にフロントエンドでランキング化し、順位、スコアを出力しています。
<img width="1804" alt="スクリーンショット 2021-10-30 22 27 39" src="https://user-images.githubusercontent.com/54165015/139534563-ea3eae33-f74f-4e0a-a2d2-6e0ff51ba906.png">
