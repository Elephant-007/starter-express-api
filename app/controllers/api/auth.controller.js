const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Model = require("../../models/User");
const config = require("../../config");
const methods = {
  login: async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await Model.findOne({ email: email });
    if (!user) return res.status(401).send("User Not Found");
    let match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).send("Password Incorrect");
    token = await jwt.sign({ email }, config.privateKey);
    res.send(token);
  },
  create: async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newContact = new Model({ email, password: hash });
    const result = await newContact.save();
    if (result) return res.status(200).send(result);
    return res.status(500).send("error");
  },
  read: async (req, res) => {
    const data = await Model.find();
    return res.status(200).send(data);
  },
  update: async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const result = await Model.findByIdAndUpdate(id, {
      ...data,
    });
    const payload = await Model.findById(id);
    return res.status(200).send(payload);
  },
  delete: async (req, res) => {
    const id = req.params.id;
    const result = await Model.findByIdAndDelete(id);
    return res.status(200).send(result);
  },
};
module.exports = methods;
