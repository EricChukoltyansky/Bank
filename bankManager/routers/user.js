const express = require("express");
const router = new express.Router();
const {
  addUser,
  getUsers,
  getUser,
  deposit,
  updateCredit,
  withdraw,
  transfer,
} = require("../../utils/utils");

router.post("/api/user", async (req, res) => {
  try {
    await addUser(req.body);
    res.status(201).send("User added");
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

router.get("/api/users", async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

router.get("/api/user/:id", async (req, res) => {
  try {
    const user = await getUser(req.params.id);
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

router.put("/api/deposit/:id", async (req, res) => {
  try {
    await deposit(req.params.id, req.body);
    res.status(201).send("User credit update");
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

router.put("/api/credit/:id", async (req, res) => {
  try {
    await updateCredit(req.params.id, req.body);
    res.status(201).send("user credit update");
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

router.put("/api/withdraw/:id", async (req, res) => {
  try {
    await withdraw(req.params.id, req.body);
    res.status(201).send("withdraw succeed");
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

router.put("/api/transferMoney/:id", async (req, res) => {
  const { email, amount } = req.body;
  try {
    console.log(req.body);
    console.log(req.params.id);
    await transfer(req.params.id, amount, email);
    res.status(201).send("transfer money succeed");
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

module.exports = router;
