import { startOfHour } from 'date-fns';
import {getCustomRepository} from 'typeorm';

import Todo from '../typeorm/entities/Todo';
import TodoRepository from '../repositories/index';


interface RequestDTO {
  id: string;
  title: string;
  description: string;
  //dueDate: Date;
}

class UpdateTodoService {
  public async execute({id, title, description}: RequestDTO): Promise<Todo>{
    
    const todoRepository = getCustomRepository(TodoRepository);

    const todoid = await todoRepository.findOne(id);
    

    if (todoid) {
      todoid.description = description; 
      const createOn = todoid.createdOn;
    }

        
    const todoDueDate = startOfHour(new Date());
  

    const todo = {
      id: id,
      title: todoid ? todoid.title : title,
      description,
      createdOn: todoid ? todoid.createdOn : new Date(),
      dueDate: todoDueDate
    }

    await todoRepository.save(todo);

    return todo;

  }
    
}

  export default UpdateTodoService;
