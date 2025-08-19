import User from "../models/User.js";

const getAllUserService = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getUserByIdService = async (id: string) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getAllUserService, getUserByIdService };
