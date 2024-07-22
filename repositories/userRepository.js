const User = require('../models/user');

const createUser = async (userData) => {
  try {
    return await User.create(userData);
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserByUsername = async (username) => {
  try {
    return await User.findOne({ where: { username } });
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserById = async (id) => {
  try {
    return await User.findByPk(id);
  } catch (error) {
    throw new Error(error.message);
  }
  
};

module.exports = { createUser, findUserByUsername, findUserById };
