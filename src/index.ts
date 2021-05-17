import express, { Request, Response } from 'express';

// Crear el servidor de express
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send(`
<div>
<h1>Hi there<h1/>
</div>
`);
});

app.listen(3000, () => {
  console.log(`Servidor corriendo en puerto 3000`);
});
