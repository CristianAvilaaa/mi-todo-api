import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';

// Importación de rutas de tareas
import taskRoutes from './modules/tasks/task.routes';

const app: Application = express();

// Middlewares globales
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(compression());

// Ruta base para verificar que responde la API
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'API de tareas activa y funcionando' });
});

// Registro de endpoints
app.use('/api/v1/tasks', taskRoutes);

export default app;