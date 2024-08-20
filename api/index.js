const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    res.send('Login Success');
  } else {
    res.status(401).send('Login Failed');
  }
});

app.get('/test', (req, res) => {
  res.send({
    message: 'Test API',
  });
})

let memo = [];

app.get('/memo', (req, res) => {
  res.send({
    memo: memo,
  });
});

app.post('/memo/add', (req, res) => {
  const { content } = req.body;
  memo.push(content);
  res.send({
    message: 'Add Memo Success',
  });
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
})