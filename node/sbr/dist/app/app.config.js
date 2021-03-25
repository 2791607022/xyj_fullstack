"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MYSQL_PORT = exports.MYSQL_USER = exports.MYSQL_PASSWORD = exports.MYSQL_HOST = exports.MYSQL_DATABASE = exports.APP_PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.APP_PORT = process.env.APP_PORT;
exports.MYSQL_DATABASE = process.env.MYSQL_DATABASE;
exports.MYSQL_HOST = process.env.MYSQL_HOST;
exports.MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
exports.MYSQL_USER = process.env.MYSQL_USER;
exports.MYSQL_PORT = process.env.MYSQL_PORT;
//# sourceMappingURL=app.config.js.map