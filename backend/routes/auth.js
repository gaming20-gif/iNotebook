const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
var fetch = require('../middleware/fetchuser')
const JWT_SECRET = 'hdisgoodboy'

// Route1 for user registration  post"/api/auth/creauser
router.post(
  '/createuser',
  [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, email, password } = req.body;

      // Check if user with email already exists
      const chekemail = await User.findOne({ email });
      if (chekemail) {
        return res.status(400).json({ error: 'Email is already registered' });
      }
      const salt = await bcrypt.genSalt(10);
       const secPass = await bcrypt.hash( req.body.password, salt);

      // Create the new user
      const user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
         const data ={
          user:{
            id: user.id
          }
         }
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({success, authtoken})
     // return res.status(201).json({ message: 'User created successfully', user });
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Internal Server Error');
    }
  }
);

// route 2 =authenticate a user using: post"/api/auth/login"
router.post(
  '/login',
  [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password Cannot be blank').exists(),
  ],
   async (req, res) => {
    let success=false;
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email, password} = req.body;

    try{
          let user = await User.findOne({email})
          if(!user){
             success=false;
            return res.status(400).json({error:"Please try to login with correct credentials"})
          }
          const passwordCompare = await bcrypt.compare(password, user.password)
          if(!passwordCompare){
             success=false;
            return res.status(400).json({ success , error:"Please try to login with correct credentials"})
          }
             const data ={
          user:{
            id: user.id
          }
         }
      const authtoken =  jwt.sign(data, JWT_SECRET);
      success=true;
      res.json({success, authtoken});
    }catch (err) {
      console.error(err.message);
      return res.status(500).send('Internal Server Error');
    }

   })

   // route 3 get loggedin user using: post"/api/auth/getuser" = login require
   router.post( '/getuser', fetchuser, async (req, res) => {

   try{
    userId = req.user.id
    const user = await User.findById(userId).select("-password")
    res.send(user)
   }catch(error){
     console.error(err.message);
      return res.status(500).send('Internal Server Error');
   }
  })
  
module.exports = router;