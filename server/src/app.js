const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config({ path: './config.env' });

require('../db/conn');
app.use(express.json());

app.use(require('../router/auth'));

const PORT = process.env.PORT;

//MiddleWare
const middleware = (req, res, next) => {
  console.log('middleware');
  next();
};

app.get('/', (req, res) => {
  res.send('hlo from home');
});
app.get('/about', middleware, (req, res) => {
  res.send('hlo from about');
});
app.get('/contact', (req, res) => {
  res.send('hlo from contact');
});
app.get('/signin', (req, res) => {
  res.send('hlo from signin');
});
app.get('/signup', (req, res) => {
  res.send('hlo from signup');
});
app.get('/', (req, res) => {
  res.send('hlo from home');
});

app.listen(PORT, () => {
  console.log('running');
});
