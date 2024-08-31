let users = [];

const getAllUsers = () => users;

const getUserById = (id) => users.find(user => user.id === id);

const addUser = (user) => {
  users.push(user);
};

const updateUser = (id, updatedUser) => {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users[index] = updatedUser;
  }
};

const deleteUser = (id) => {
  users = users.filter(user => user.id !== id);
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
