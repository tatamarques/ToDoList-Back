import {Entity, 
       Column, 
       PrimaryGeneratedColumn, 
       CreateDateColumn, 
       UpdateDateColumn} from 'typeorm';


@Entity('todo')
class Todo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;
  
  @CreateDateColumn()
  createdOn: Date;

  @UpdateDateColumn()
  dueDate: Date;

  

  
}

export default Todo;
