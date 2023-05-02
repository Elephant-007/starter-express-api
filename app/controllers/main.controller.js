const ContactModel = require("../models/Contact");
const methods = {
  index: (req, res) => {
    res.render("index");
  },
  resume: (req, res) => {
    res.render("resume");
  },
  contact: (req, res) => {
    res.render("contact");
  },
  manage: (req, res) => {
    res.render("manage");
  },
  addContact: async (req, res) => {
    const data = req.body;
    const newContact = new ContactModel({ ...data });
    const result = await newContact.save();
    if (result) return res.status(200).send(result);
    return res.status(500).send("error");
  },
  readContact: async (req, res) => {
    const data = await ContactModel.find();
    return res.send(data);
  },
  deleteContact: async (req, res) => {
    const id = req.params.id;
    const result = await ContactModel.findByIdAndDelete(id);
    return res.send(result);
  },
};
module.exports = methods;
