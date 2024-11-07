import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { Todoservice } from './app.service';

@Controller('todos') // Ensure this decorator has 'todos' route
export class AppController {
  constructor(private readonly todoservice: Todoservice) {}

  @Post()
  addTask(@Body('task') task: string) {
    return this.todoservice.addTask(task); // Correctly mapped POST to '/todos'
  }

  @Get()
  getTasks() {
    return this.todoservice.getTasks(); // Correctly mapped GET to '/todos'
  }

  @Patch(':id')
  completeTask(@Param('id') id: number) {
    return this.todoservice.completedTask(id); // Correctly mapped PATCH to '/todos/:id'
  }
}
