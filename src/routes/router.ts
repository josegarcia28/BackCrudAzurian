import { Router, Request, Response } from 'express';
import UserController from '../controller/user';



const router = Router();
router.post('/register',UserController.save); 
router.get('/user/:id',UserController.detail); 
router.get('/users/list',UserController.list); 
router.put('/edit/:id', UserController.update);
router.delete('/remove/:id', UserController.delete);

export default router;