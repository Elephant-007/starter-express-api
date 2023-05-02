const ProfileModel = require("../../models/Profile");
const methods = {
  createProfile: async (req, res) => {
    const data = req.body;
    const newContact = new ProfileModel({ ...data });
    const result = await newContact.save();
    if (result) return res.status(200).send(result);
    return res.status(500).send("error");
  },
  readProfile: async (req, res) => {
    const data = await ProfileModel.find();
    return res.status(200).send(data);
  },
  updateProfile: async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const result = await ProfileModel.findByIdAndUpdate(id, {
      ...data,
    });
    const payload = await ProfileModel.find();
    return res.status(200).send(payload);
  },
  deleteProfile: async (req, res) => {
    const id = req.params.id;
    const result = await ProfileModel.findByIdAndDelete(id);
    return res.status(200).send(result);
  },
};
module.exports = methods;
