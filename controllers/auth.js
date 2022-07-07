const User = require("../models/user");
const jwt = require('jsonwebtoken');


exports.signup = async (req, res) => {
  const { name, password } = req.body;
  let newUser = new User({ name,password });
        newUser.save((err, success) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            res.json({
                message: 'Signup success! Please signin.'
            });
        });
};

exports.signin = (req, res) => {
  const { username, password } = req.body;
 
      // authenticate
      if (!user.authenticate(password)) {
          return res.status(400).json({
              error: 'Name and password do not match.'
          });
      }
      // generate a token and send to client
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

      res.cookie('token', token, { expiresIn: '1d' });
      const { _id,  name } = user;
      return res.json({
          token,
          user: { _id, name }
      });
  
}

