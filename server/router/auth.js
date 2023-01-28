const { json } = require('express');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('../db/conn');
const User = require('../model/userSchema');
const Authenticate = require('../middleware/Authenticate');
const cookieParser = require('cookie-parser');

router.use(cookieParser());

router.get('/', (req, res) => {
  res.send('hlo from home Router');
});

router.post('/register', async (req, res) => {
  const { name, email, phone, work, password, cPassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cPassword) {
    return res.status(422).json({ error: 'Please fill all fields' });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: 'Email already exist' });
    } else if (password !== cPassword) {
      return res.status(422).json({ error: 'Password not match' });
    } else {
      const user = new User({ name, email, phone, work, password, cPassword });
      await user.save();
      res.status(201).json({ message: 'User Register Scucessfully' });
    }
  } catch (e) {
    console.log(e);
  }
});

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ error: 'Please fill all fields' });
    }

    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();

      res.cookie('jwtoken', token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (!isMatch) {
        res.status(400).json({ error: 'user error ps' });
      } else {
        res.json({ message: 'user signin Sucessfully' });
      }
    } else {
      res.status(400).json({ error: 'user error' });
    }
  } catch (e) {
    console.log(e);
  }
});

router.get('/about', Authenticate, (req, res) => {
  console.log('about us');
  res.send(req.rootUser);
});
router.get('/getData', Authenticate, (req, res) => {
  console.log('about us');
  res.send(req.rootUser);
});

router.post('/contact', Authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      console.log('messgae failed');
      return res.json({ error: 'Failed' });
    }
    const userContact = await User.findOne({ _id: req.userID });
    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );
      await userContact.save();
      res.status(201).json({ message: 'Successfully send message' });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get('/logout', (req, res) => {
  console.log('Logout' );
  res.clearCookie('jwtoken',{path:'/'})
  res.status(200).send('User Logout')
});

module.exports = router;
