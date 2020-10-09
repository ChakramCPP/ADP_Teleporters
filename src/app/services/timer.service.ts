import { Task } from './../models/task.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TimerService {

  _taskList: Task[] = [];

  constructor() { }

  addTask(task: Task) {
    task.ID = this._taskList.length + 1;
    this._taskList.push(task);
    
  }

  

  deleteTask(id: number) {
    const task = this._taskList.findIndex(c => c.ID === id);
    this._taskList.splice(task, 1);
  }

  getAllItems() {
    return this._taskList;
  }
}
