import express from "express";
import UserModel from "../models/userModel.js";

const router = express.Router();

// ! Get All User
router.get("/", (req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err.message));
});
// ! Fetching Update User Details With Get Request
router.get("/update/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.json(err.message));
});
// ! Updating The User
router.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  const { name, email, age } = req.body;
  UserModel.findByIdAndUpdate({ _id: id }, { name, email, age })
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.json(err.message));
});
// !Deleting User
router.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then(() => res.json("User Successfully Deleted"))
    .catch((err) => res.json(err));
});
// ! Create User
router.post("/createUser", (req, res) => {
  const { name, email, age } = req.body;
  UserModel.create({ name, email, age })
    .then(() => {
      res.status(200).json("User Success Fully Created in The Database");
    })
    .catch((err) => res.json(err));
});

export default router;
