import { Todoservice } from './app.service';
export declare class AppController {
    private readonly todoservice;
    constructor(todoservice: Todoservice);
    addTask(task: string): import("./todo.interface").Todo;
    getTasks(): import("./todo.interface").Todo[];
    completeTask(id: number): import("./todo.interface").Todo;
}
