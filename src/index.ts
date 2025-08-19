import express from "express";
import graphqlServer from "./graphql/graphqlServer.js";
import dotenv from "dotenv";
import connectDB from "./database/mongoDb.js";
import { expressMiddleware } from "@as-integrations/express5";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

async function startServer() {
  try {
    await graphqlServer.start();

    // Apply the Apollo GraphQL middleware to the /graphql endpoint
    app.use(
      "/graphql",
      expressMiddleware(graphqlServer, {
        context: async ({ req }) => {
          //add context here
          return { req };
        },
      })
    );

    app.listen(Number(process.env.PORT), () => {
      connectDB();
      console.log(`Server is running on port ${process.env.PORT}`);
      console.log(
        `GraphQL endpoint: ${process.env.SERVER_URL}:${process.env.PORT}/graphql`
      );
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
}

startServer();
