const Model = require("../../models/Asset");
const methods = {
  create: async (req, res) => {
    const data = req.body;
    const newContact = new Model({ ...data });
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
