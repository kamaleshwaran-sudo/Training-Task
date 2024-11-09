import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.interface';
@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService){}

    @Post()
    create(@Body() todo:Todo):Todo{
        return this.todoService.create(todo);
    }

    @Get()
    findAll():Todo[]{
        return this.todoService.findAll();
    }

    @Put(':id')
    update(@Param('id') id:number ,@Body()todo: Todo):Todo{
        return this.todoService.update(id,todo);
    }

    @Delete(':id')
    remove(@Param('id') id:number):Todo[]{
        return this.todoService.remove(id);
    }
}
