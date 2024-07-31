import express, { Request, Response } from "express";
import { readData } from "./file-reader";

const app = express();
const PORT = process.env.PORT || 1337;

const data = readData("public/data.csv")
app.get('/', (req: Request, res: Response) => {
  res.status(200).send(data)
});

app.listen(PORT, () => {
  console.log("Server running at PORT: ", PORT);
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(error.message);
});
