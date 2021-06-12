/*
    you can use babel to transpile ts and run it via babel node with nodemon but it will not check for types. to check for types, we can use tsc
    when using babel, it does not spit out js files after compiling ts files, instead it compiles ts files and runs in the terminal or browser but no output file is dropped in the dist folder

    when using babel and tsc, you have to configure tsconfig file to not spit files, rather it should just check for types error.
    you can tell it to spit out js files, but it is not useful since babel still runs the ts files and not js

    using babel and tsc, it is not ideal since you cannot use this combination in prod as you cannot run ts files in the browser or using node, so the best combo is tsc and nodemon


    
    on the other hand, we can use tsc to transpile ts to js and use nodemon to run the js output files
    tsc compiles down all ts files, including the import statements and all the es6 syntax as specified in the tsconfig file and nodemon runs the compiled down js files

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
