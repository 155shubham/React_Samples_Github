import mongoose from "mongoose";

const talentSchema = mongoose.Schema({
  name: String,
  address: String,
  date: String,
  projectId: String,
});

const TalentDetails = mongoose.model("TalentDetails", talentSchema);

export default TalentDetails;
