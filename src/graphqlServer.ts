import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";
import { schema } from "./graphql/schema/schema.js";

dotenv.config();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: {
    Query: {
      hello: () => "Hello world!",
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
