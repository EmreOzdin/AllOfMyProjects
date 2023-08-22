import User from "../models/userModel.js";

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      succeeded: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      succeeded: false,
      error,
    });
  }
};

export { createUser };
