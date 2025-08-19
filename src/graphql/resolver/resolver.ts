import {
  addUserController,
  getAllUsersController,
  getUserByIdController,
} from "../../controllers/userController.js";
import {
  getAllCourseController,
  getCourseByIdController,
} from "../../controllers/courseController.js";

export const graphQlResolvers = {
  Mutation: {
    addUser: async (parent: any, arg: any) => {
      try {
        await addUserController(arg);
        return "User added successfully";
      } catch (error) {
        return "Error while adding user";
      }
    },
  },
  Query: {
    users: getAllUsersController,
    courses: getAllCourseController,
    course: async (parent: any, arg: { id: string }) => {
      // console.log(parent);

      const course = await getCourseByIdController(arg.id);
      return course;
    },
  },
  Course: {
    instructor: async (parent: any) => {
      console.log("parent", parent);

      const user = await getUserByIdController(parent.instructor);
      // console.log(user);

      return user;
    },
  },
};
