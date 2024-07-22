const { findUserById } = require('../repositories/userRepository');

exports.getUserProfile = async (req, res) => {
  try {
    const user = await findUserById(req.user.id);
    if (user) {
      res.json({
        username: user.username,
        email: user.email,
        name: user.name,
        age: user.age,
        mobileNumber: user.mobileNumber
      });
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
