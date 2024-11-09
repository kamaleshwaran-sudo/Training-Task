import { Injectable } from '@nestjs/common';
import {Todo} from './todo.interface'
@Injectable()
export class TodoService {
    private todos:Todo[] = [];
    findAll():Todo[]{
        return this.todos;
    }

    create(todo:Todo):Todo{
        const newTodo = {...todo,id:this.todos.length + 1};
        this.todos.push(newTodo);
        return newTodo;
    }

    update(id: number, todo: Todo): Todo {
        const index = this.todos.findIndex(t => t.id == id);
        console.log(`Looking for Todo with id: ${id}`);
        
        if (index !== -1) {
          console.log(`Todo found at index: ${index}`);
          console.log(`Before update:`, this.todos[index]);
          
          // Update the Todo
          this.todos[index] = { ...this.todos[index], ...todo };
          
          console.log(`After update:`, this.todos[index]);
          return this.todos[index];  // Return the updated Todo
        }
        
        console.log('Todo not found!');
        return null;  // Return null if Todo is not found
      }
      

    remove(id:number): Todo[]{
        const index = this.todos.findIndex(t=> t.id === id);
        if(index !== -1){
         this.todos.splice(index,1);
         return this.todos;
        }
    }
}
