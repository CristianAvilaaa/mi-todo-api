import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';

// Importación de rutas de los módulos
import taskRoutes from './modules/tasks/task.routes';
import categoryRoutes from './modules/categories/category.routes';

const app: Application = express();

// Middlewares globales
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(compression());

// Ruta base de prueba (para verificar en el navegador o Postman)
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'API de tareas activa y funcionando' });
});

// Registro formal de Endpoints
app.use('/api/v1/tasks', taskRoutes);
app.use('/api/v1/categories', categoryRoutes);

export default app;