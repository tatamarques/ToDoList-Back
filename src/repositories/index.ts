import Todo from '../typeorm/entities/Todo';

import { EntityRepository, Repository } from 'typeorm';



@EntityRepository(Todo) 
class TodoRepository extends Repository<Todo>{

    
    


};

export default TodoRepository;