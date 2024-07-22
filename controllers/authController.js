const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const { createUser, findUserByUsername } = require('../repositories/userRepository');

const { JWT_SECRET } = process.env;

exports.register = async (req, res) => {
  try {
    const { username, email, password, name, age, mobileNumber } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);//The password is not stored in its actual form in the database. Instead, it is stored in a hashed format using the bcrypt function
    const user = await createUser({ username, email, password: hashedPassword, name, age, mobileNumber });

    //show the message user are registered
    res.status(201).json({ message: 'User registered successfully!' });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await findUserByUsername(username);
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ id: user.id }, "JWT_SECRET", { expiresIn: '300s' });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
