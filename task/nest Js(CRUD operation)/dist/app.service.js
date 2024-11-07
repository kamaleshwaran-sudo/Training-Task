"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todoservice = void 0;
const common_1 = require("@nestjs/common");
let Todoservice = class Todoservice {
    constructor() {
        this.todos = [];
    }
    addTask(task) {
        const newTask = {
            id: this.todos.length + 1,
            task,
            completed: false,
        };
        this.todos.push(newTask);
        return newTask;
    }
    getTasks() {
        return this.todos;
    }
    completedTask(id) {
        const task = this.todos.find((todo) => todo.id === id);
        if (task) {
            task.completed = true;
            return task;
        }
        return null;
    }
};
exports.Todoservice = Todoservice;
exports.Todoservice = Todoservice = __decorate([
    (0, common_1.Injectable)()
], Todoservice);
//# sourceMappingURL=app.service.js.map