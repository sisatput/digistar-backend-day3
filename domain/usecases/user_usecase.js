const { v4: uuidv4 } = require("uuid");
const User = require("../models/user_model");
const userRepository = require("../repositories/user_repository");

const createUser = (name, password, email) => {
  if (!password) {
    throw new Error("Password is required");
  }

  const id = uuidv4();
  const user = new User(id, name, password, email);
  userRepository.addUser(user);
  return user;
};

module.exports = {
  createUser,
};
