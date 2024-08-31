const express = require("express");
const { getAllUsersHandler, getUserByIdHandler, createUserHandler, updateUserHandler, deleteUserHandler } = require("../handlers/userHandler");

const router = express.Router();

router.get("/", getAllUsersHandler);
router.get("/:id", getUserByIdHandler);
router.post("/", createUserHandler);
router.put("/:id", updateUserHandler);
router.delete("/:id", deleteUserHandler);

module.exports = router;
