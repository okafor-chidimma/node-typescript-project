/*
    you can use babel to transpile ts and run it via babel node with nodemon but it will not check for types. to check for types, we can use tsc
    
    on the other hand, we can use tsc to transpile ts to js and use nodemon to run the js output files

*/

import express, { Request, Response, NextFunction } from "express";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import TodoRoutes from "./routes/todos";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

app.use("/api/todo", TodoRoutes);
//error handling middle ware

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    response.json({ message: error.message, status: 500 });
  }
);

//app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
