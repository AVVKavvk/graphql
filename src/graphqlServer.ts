import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";
import { schema } from "./graphql/schema/schema.js";
import {
  getAllUsersController,
  getUserByIdController,
} from "./controllers/userController.js";
import {
  getAllCourseController,
  getCourseByIdController,
} from "./controllers/courseController.js";

dotenv.config();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: {
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
  },
});

export const startGraphqlServer = async () => {
  try {
    await startStandaloneServer(server, {
      listen: {
        port: Number(process.env.GRAPHQL_SERVER_PORT),
      },
    });
    console.log(
      `GraphQL Server is running on PORT ${process.env.GRAPHQL_SERVER_PORT}`
    );
  } catch (error) {
    console.error(error);
  }
};
