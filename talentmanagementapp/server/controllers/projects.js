import ProjectsList from "../models/projectsSchema.js";
import mongoose from "mongoose";

export const getProjects = async (req, res) => {
  try {
    const projectsList = await ProjectsList.find();

    res.json(projectsList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const insertProject = async function insertProject(req, res) {
  const project = req.body;
  project.ProjectId = 3;
  const newProject = new ProjectsList(project);
  try {
    await newProject.save();
    res.sendStatus(200);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const updateProject = async function updateProject(req, res) {
  console.dir(req.body.ProjectId);
  const projectId = req.body.ProjectId;
  let Id = await ProjectsList.findOne(
    {
      ProjectId: projectId,
    },
    "_id"
  ).exec();

  try {
    await ProjectsList.findByIdAndUpdate(
      { _id: mongoose.Types.ObjectId(Id) },
      { ProjectStatus: "Submitted" },
      { new: true }
    );
    res.sendStatus(200);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

//// Enhancements
// export const upsertProject = async (req, res) => {
//   // console.dir(req.body);
//   // res.send(req.body);
//   try {
//     if (req.body.ProjectId == "") {
//       await insertRecord(req, res);
//     } else {
//       await updateRecord(req, res);
//     }
//   } catch (error) {
//     res.status(401).json({ message: error.message });
//   }
// };
