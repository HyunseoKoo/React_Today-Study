import express from 'express';
import { jwtAuth } from '../middlewares/jwtAuth.js';
import { TodoService } from '../services/todoService.js';
const router = express.Router();

// jwtAuth => 사용자가 로그인후 token이 유효한지를 확인하는 역할
router.post('/', jwtAuth, TodoService.create);
// router.post('/', TodoService.create);
// post /todo body => {content, title}

router.get('/', jwtAuth, TodoService.read);
// router.get('/', TodoService.read);
// post /todo

router.put('/:todoId', jwtAuth, TodoService.update);
// router.put('/:todoId', TodoService.update);
// put /todo/3 body => {content, state}

router.delete('/:todoId', jwtAuth, TodoService.delete);
// router.delete('/:todoId', TodoService.delete);
// delete /todo/3

export default router;
