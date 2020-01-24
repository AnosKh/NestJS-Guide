import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid/v1';

import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id);
    }

    createTask(createTaskDto: CreateTaskDto): Task {
        const { title, description } = createTaskDto;

        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN
        };
        this.tasks.push(task);
        return task;
    }

    deleteTask(id: string): void {
        // this.tasks = this.tasks.slice(0, this.tasks.indexOf(this.getTaskById(id)));
        this.tasks = this.tasks.filter(task => task.id !== id);
        console.log(`Task ${id} - Deleted!`);
    }
}
