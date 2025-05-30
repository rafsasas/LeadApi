import express from 'express';
import cors from 'cors';
import leadRoutes from './modules/lead/routes'; 

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/leads', leadRoutes);
export default app;