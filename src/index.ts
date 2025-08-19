import express from "express";
import { startGraphqlServer } from "./graphqlServer.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

async function startServer() {
  try {
    await startGraphqlServer();
    app.listen(Number(process.env.PORT), () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}
startServer();
