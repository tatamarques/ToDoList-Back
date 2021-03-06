import {Router} from 'express';
import { getCustomRepository} from 'typeorm';


import TodoRepository from '../repositories';
import CreateTodoService from '../services/CreateTodoService';
import UpdateTodoService from '../services/UpdateTodoService';



const routes = Router();

routes.get('/',  async (request, response) => {
  const todoRepository = getCustomRepository(TodoRepository);
  const todos = await todoRepository.find();
  return response.json(todos);
});


routes.post('/', async (request, response) => {
  try{
    const { title, description} = request.body;

       
    const createTodo = new CreateTodoService();

    const todo = await createTodo.execute({
      title,
      description,
    })

  return response.json(todo);
  } catch (err) {
    return response.status(400).json({error: err.message});
  }
});

routes.put('/:id', async (request, response) => {
  try{

    const id = request.params.id;
   
    const {title, description} = request.body;

  
    const updateTodo = new UpdateTodoService();

    const todo = await updateTodo.execute({
      id,
      title,
      description
    })
   
  return response.json(todo);
  } catch (err) {
    return response.status(400).json({error: err.message});
  }
});

routes.delete('/:id', async (request, response) => {
  try{

    const id = request.params.id;
    
    const todoRepository = getCustomRepository(TodoRepository);
        
    const todos = await todoRepository.find({
      where: {
        id : id
      } 
    });

    await todoRepository.remove(todos);

    const todo = await todoRepository.find();
   
  return response.json(todo);
  } catch (err) {
    return response.status(400).json({error: err.message});
  }
});

export default routes;
