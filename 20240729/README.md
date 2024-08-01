# 課題: シンプルなメモアプリの作成
## 要求仕様
**ホームページ**

1. ユーザーがホームページにアクセスすると、既存のメモ一覧が表示される。  
- メモはタイトルと内容が表示される。
- 新規メモ作成機能

2. ユーザーが新しいメモを作成できるページが必要。  
- フォームにはタイトルと内容の入力フィールドが必要。  
- 作成ボタンを押すと、メモが保存されてメインページに表示される。  
- メモ削除機能

3. ユーザーが既存のメモを削除できるようにする。  
- 各メモに削除ボタンがあり、それを押すとメモが削除される。  

## プロジェクトのセットアップ
```
npm init -y
npm install express body-parser ejs
```

## 初期プログラム
```
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

## ディレクトリ構成
```
memo-app/
├── node_modules/
├── views/
│   ├── index.ejs
│   ├── new.ejs
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── scripts.js
├── app.js
├── package.json
└── package-lock.json
```