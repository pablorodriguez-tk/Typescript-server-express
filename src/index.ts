import express from 'express';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';
import './controllers/LoginController';
import { AppRouter } from './AppRouter';

// Crear el servidor de express
const app = express();

// Lectura y parseo del body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['asddas'] }));

// Rutas
app.use(router);
app.use(AppRouter.getInstance());

// Escuchar peticiones
app.listen(3000, () => {
  console.log(`Servidor corriendo en puerto 3000`);
});
