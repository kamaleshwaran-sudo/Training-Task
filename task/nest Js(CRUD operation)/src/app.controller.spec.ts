import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { Todoservice } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let todoservice: Todoservice;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [Todoservice],
    }).compile();

    appController = app.get<AppController>(AppController);
    todoservice = app.get<Todoservice>(Todoservice);
  });

  describe('addTask', () => {
    it('should add a new task and return the task', () => {
      const task = 'Learn NestJS';

      // Mock the service method to return a fake task
      jest.spyOn(todoservice, 'addTask').mockImplementation(() => ({
        id: 1,
        task,
        completed: false,
      }));

      const result = appController.addTask(task); // Pass the string directly
      expect(result).toEqual({
        id: 1,
        task,
        completed: false,
      });
    });
  });

  describe('getTasks', () => {
    it('should return all tasks', () => {
      const tasks = [
        { id: 1, task: 'Learn NestJS', completed: false },
        { id: 2, task: 'Build an app', completed: false },
      ];

      // Mock the service method to return tasks
      jest.spyOn(todoservice, 'getTasks').mockImplementation(() => tasks);

      const result = appController.getTasks();
      expect(result).toEqual(tasks);
    });
  });

  describe('completeTask', () => {
    it('should mark a task as completed', () => {
      const taskId = 1;
      const task = { id: taskId, task: 'Learn NestJS', completed: true };

      // Mock the service method to simulate completing a task
      jest.spyOn(todoservice, 'completedTask').mockImplementation(() => task);

      const result = appController.completeTask(taskId);
      expect(result).toEqual(task);
    });

    it('should return null if task is not found', () => {
      const taskId = 999;

      // Mock the service method to return null for non-existent tasks
      jest.spyOn(todoservice, 'completedTask').mockImplementation(() => null);

      const result = appController.completeTask(taskId);
      expect(result).toBeNull();
    });
  });
});
