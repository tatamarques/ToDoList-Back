import { startOfHour } from 'date-fns';
import {getCustomRepository} from 'typeorm';
import {uuid} from 'uuidv4';

import Todo from '../typeorm/entities/Todo';
import TodoRepository from '../repositories/index';


interface RequestDTO {
  title: string;
  description: string;
  //createdOn: Date;
  //dueDate: Date;
}

class CreateTodoService {
  public async execute({title, description}: RequestDTO): Promise<Todo>{
    const todoRepository = getCustomRepository(TodoRepository);

    const todoCreatedOn = startOfHour(new Date());
    const todoDueDate = startOfHour(new Date());

    const todo = todoRepository.create({
      id: uuid(),
      title,
      description,
      createdOn: todoCreatedOn,
      dueDate: todoDueDate
    })

    await todoRepository.save(todo);

    return todo;

  }
    
}

  export default CreateTodoService;
