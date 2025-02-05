"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = require("./route");
const middlewares_1 = require("./middlewares");
const app = (0, express_1.default)();
const port = 3000;
app.use(middlewares_1.addTimestamp);
app.use(middlewares_1.logger);
app.use(middlewares_1.errorHandler);
app.use(express_1.default.json());
app.use('/health', route_1.healhRouter);
app.use('/users', route_1.usersRouter);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
