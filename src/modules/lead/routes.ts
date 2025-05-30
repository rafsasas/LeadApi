import { Router } from 'express';
import { store } from './controller';

const router = Router();

router.post('/', store);

export default router;