"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const todos_1 = __importDefault(require("./routes/todos"));
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(cors_1.default());
app.use(body_parser_1.urlencoded({ extended: true }));
app.use(body_parser_1.json());
app.use("/api/todo", todos_1.default);
app.use((error, request, response, next) => {
    response.json({ message: error.message, status: 500 });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
