const { json } = require('express');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('../db/conn');
const User = require('../model/userSchema');

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
      console.log(`hlo ${token}`);
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

module.exports = router;
