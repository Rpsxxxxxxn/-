const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

let ids = 0;

function getIds() {
  return ids++;
}

notes = [
  { id: getIds(), title: "最初のメモ", content: "これは最初のメモです。" },
  { id: getIds(), title: "2番目のメモ", content: "これは2番目のメモです。" },
  { id: getIds(), title: "3番目のメモ", content: "これは3番目のメモです。" }
];

// 既存のメモ一覧が表示されるページ
app.get('/', (req, res) => {
  res.render('index', { notes: notes });
});

// ユーザーが新しいメモを作成できる
app.post('post', (req, res) => {
  console.log(req.body);
  notes.push({ id: getIds(), title: req.body.title, content: req.body.content });
  res.redirect('/');
});

// ユーザーがメモを削除できる
app.post('/delete', (req, res) => {
  console.log(req.body)
  notes.splice(req.body.id, 1);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});