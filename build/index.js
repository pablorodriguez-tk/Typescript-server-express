"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var loginRoutes_1 = require("./routes/loginRoutes");
var cookie_session_1 = __importDefault(require("cookie-session"));
// Crear el servidor de express
var app = express_1.default();
// Lectura y parseo del body
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ['asddas'] }));
// Rutas
app.use(loginRoutes_1.router);
// Escuchar peticiones
app.listen(3000, function () {
    console.log("Servidor corriendo en puerto 3000");
});
