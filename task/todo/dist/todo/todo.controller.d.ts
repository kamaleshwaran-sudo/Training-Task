import { TodoService } from './todo.service';
import { Todo } from './todo.interface';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    create(todo: Todo): Todo;
    findAll(): Todo[];
    update(id: number, todo: Todo): Todo;
    remove(id: number): Todo[];
}
