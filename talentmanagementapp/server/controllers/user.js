import UserList from "../models/userSchema.js";

export const getUsers = async (req, res) => {
  try {
    const userData = await UserList.find();
    res.json(userData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  console.dir(req.body);

  const user = req.body;

  const query = { UserName: user.UserName, Password: user.Password };
  try {
    const userDetail = await UserList.find(query).limit(1);

    if (userDetail.length === 0) res.json({ token: null });
    else if (userDetail.length > 0) res.json({ token: "test123" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;
  const newUser = new UserList(user);
  try {
    await newUser.save();

    res.json(newUser);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
