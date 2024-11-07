import { Todo } from './todo.interface';
export declare class Todoservice {
    private todos;
    addTask(task: string): Todo;
    getTasks(): Todo[];
    completedTask(id: number): Todo | null;
}
