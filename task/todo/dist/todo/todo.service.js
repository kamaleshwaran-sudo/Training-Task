"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
let TodoService = class TodoService {
    constructor() {
        this.todos = [];
    }
    findAll() {
        return this.todos;
    }
    create(todo) {
        const newTodo = { ...todo, id: this.todos.length + 1 };
        this.todos.push(newTodo);
        return newTodo;
    }
    update(id, todo) {
        const index = this.todos.findIndex(t => t.id == id);
        console.log(`Looking for Todo with id: ${id}`);
        if (index !== -1) {
            console.log(`Todo found at index: ${index}`);
            console.log(`Before update:`, this.todos[index]);
            this.todos[index] = { ...this.todos[index], ...todo };
            console.log(`After update:`, this.todos[index]);
            return this.todos[index];
        }
        console.log('Todo not found!');
        return null;
    }
    remove(id) {
        const index = this.todos.findIndex(t => t.id === id);
        if (index !== -1) {
            this.todos.splice(index, 1);
            return this.todos;
        }
    }
};
exports.TodoService = TodoService;
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)()
], TodoService);
//# sourceMappingURL=todo.service.js.map