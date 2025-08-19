import {
  getAllUserService,
  getUserByIdService,
  addUserService,
} from "../services/userService.js";

const getAllUsersController = async () => {
  try {
    const users = await getAllUserService();
    return users;
  } catch (error) {
    console.log(error);

    throw error;
  }
};

const getUserByIdController = async (id) => {
  try {
    // console.log(id);

    const user = await getUserByIdService(id);
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const addUserController = async (arg) => {
  try {
    const user = await addUserService(arg);
    // return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export { getAllUsersController, getUserByIdController, addUserController };
