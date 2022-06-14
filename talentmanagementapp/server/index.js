import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import ProjectRoutes from "./routes/projects.js";
import TalentRoutes from "./routes/talents.js";
import UserRoutes from "./routes/user.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api/projects", ProjectRoutes);
app.use("/api/talents", TalentRoutes);
app.use("/api/users", UserRoutes);

const CONNECTION_URL =
  "mongodb+srv://sb:sb123@cluster0.1uthd0l.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  //     , {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on PORT: ${PORT})`))
  )
  .catch((error) => console.log(error.message));

//   No longer required. it has been deprecated.
// mongoose.set("useFindAndModify", false);
