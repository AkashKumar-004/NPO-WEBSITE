const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Model/user');
const { check, validationResult } = require('express-validator'); 
const router = express.Router();

router.get('/all',async (req,res)=>{
    try{
        const data=await User.find();
        res.json(data).status(200);
    }
    catch{
        res.json(error).status(500);
    }
})

router.post(
  '/signup',
  [
    check('username', 'Username is required').notEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be 8 or more characters').isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password} = req.body;

    try {
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const hashed = await bcrypt.hash(password, 10);

      const user = new User({ username, email, password: hashed });

      await user.save();
      res.status(201).send('User created');
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
);
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username,role: user.role},
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({ token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id',async(req,res)=>{
    const id=req.params.id;
    try
    {
        const data=await User.findByIdAndDelete(id);
        if(!data)
        {
            return res.status(404).json({message : 'not found'});
        }
        res.status(200).json({message : 'service deleted successfully'})
    }
    catch (err) {
        console.error('Error deleting data:', err);
        res.status(500).json({ message: 'Error deleting data'});
      }
})
module.exports = router;
