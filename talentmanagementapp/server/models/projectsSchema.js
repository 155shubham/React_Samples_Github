import mongoose from "mongoose";

const projectsSchema = mongoose.Schema({
  ProjectId: String,
  ProjectName: String,
  ProjectDescription: String,
  ProjectStatus: String,
  UserName: String,
});

const ProjectsList = mongoose.model("ProjectsList", projectsSchema);

export default ProjectsList;
