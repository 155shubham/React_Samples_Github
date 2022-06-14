import TalentDetails from "../models/talentSchema.js";
import mongoose from "mongoose";

export const getTalents = async (req, res) => {
  try {
    const talentList = await TalentDetails.find();

    res.json(talentList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTalents = async function createTalents(req, res) {
  // console.dir(req.body);

  const talent = req.body.TalentData;
  const newTalent = new TalentDetails(talent);
  try {
    await newTalent.save();
    res.sendStatus(200);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
