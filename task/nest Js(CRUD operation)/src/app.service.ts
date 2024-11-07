// app.service.ts
import { Injectable } from '@nestjs/common';
import { Todo } from './todo.interface'; // Import Todo from todo.interface.ts

@Injectable()
export class Todoservice {
  private todos: Todo[] = [];

  // Add a new task
  addTask(task: string): Todo {
    const newTask: Todo = {
      id: this.todos.length + 1,
      task,
      completed: false,
    };
    this.todos.push(newTask);
    return newTask;
  }

  // Get all tasks
  getTasks(): Todo[] {
    return this.todos;
  }

  // Mark a task as completed
  completedTask(id: number): Todo | null {
    const task = this.todos.find((todo) => todo.id === id);
    if (task) {
      task.completed = true;
      return task;
    }
    return null;
  }
}
