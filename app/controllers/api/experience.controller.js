const ExperienceModel = require("../../models/Experience");
const methods = {
  createExperience: async (req, res) => {
    const data = req.body;
    const newContact = new ExperienceModel({ ...data });
    const result = await newContact.save();
    if (result) return res.status(200).send(result);
    return res.status(500).send("error");
  },
  readExperience: async (req, res) => {
    const data = await ExperienceModel.find();
    return res.status(200).send(data);
  },
  updateExperience: async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const result = await ExperienceModel.findByIdAndUpdate(id, {
      ...data,
    });
    const payload = await ExperienceModel.findById(id);
    return res.status(200).send(payload);
  },
  deleteExperience: async (req, res) => {
    const id = req.params.id;
    const result = await ExperienceModel.findByIdAndDelete(id);
    return res.status(200).send(result);
  },
};
module.exports = methods;
