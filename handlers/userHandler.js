const userRepository = require("../domain/repositories/user_repository");
const { createUser } = require("../domain/usecases/user_usecase");

const getAllUsersHandler = (req, res) => {
  const users = userRepository.getAllUsers();
  res.json({ allUsers: users });
};

const getUserByIdHandler = (req, res) => {
  const id = req.params.id;
  const user = userRepository.getUserById(id);

  if (!user) {
    return res.status(404).json({ error: "User not found", code: 404 });
  }

  res.json({ user });
};

const createUserHandler = (req, res) => {
  const { name, password, email } = req.body;

  if (!name || !password || !email) {
    return res.status(400).json({ error: "User must have a name, password, and email", code: 400 });
  }

  try {
    const user = createUser(name, password, email);
    res.status(201).json({
      message: "User has been added",
      newuser: user,
    });
  } catch (error) {
    res.status(400).json({ error: error.message, code: 400 });
  }
};

const updateUserHandler = (req, res) => {
  const id = req.params.id;
  const { name, password, email } = req.body;

  const existingUser = userRepository.getUserById(id);
  if (!existingUser) {
    return res.status(404).json({ error: "User not found", code: 404 });
  }

  if (!name || !password || !email) {
    return res.status(400).json({ error: "User must have a name, password, and email", code: 400 });
  }

  const updatedUser = { id, name, password, email };
  userRepository.updateUser(id, updatedUser);
  res.json({
    message: "User has been updated",
    updateduser: updatedUser,
  });
};

const deleteUserHandler = (req, res) => {
  const id = req.params.id;

  const existingUser = userRepository.getUserById(id);
  if (!existingUser) {
    return res.status(404).json({ error: "User not found", code: 404 });
  }

  userRepository.deleteUser(id);
  res.status(200).json({ message: "User has been deleted" });
};

module.exports = {
  getAllUsersHandler,
  getUserByIdHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
};
