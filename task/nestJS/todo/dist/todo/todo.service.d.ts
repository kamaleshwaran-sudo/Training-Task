import { Todo } from './todo.interface';
export declare class TodoService {
    private todos;
    findAll(): Todo[];
    create(todo: Todo): Todo;
    update(id: number, todo: Todo): Todo;
    remove(id: number): Todo[];
}
