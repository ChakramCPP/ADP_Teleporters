import { CounterComponent } from './../../../models/counter/counter.component';
import { TimerService } from './../../../services/timer.service';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {
  constructor( private dialog?: MatDialog,
    private _timerService?: TimerService) { }
  bg=["aqua","orange","yellow","lightgreen"]

  name = '';
  itemList = [];
  timer = '';
  increment=0;

  board: Board = new Board('My Board', [
    new Column('Ideas', [
      "create kanban board",
      "develope stop-watch",
      "notification builder"
    ]),
    new Column('Todo', [
      "developing kanban board using angular",
      "developing stop-watch using angular",
      "integrating "
    ]),
    new Column('work in progress', [
      'notification page',
      'polls page',
      'survey page',
      'employee well being application'
    ]),
    new Column('Done', [
      'basic ux design ',
      'backend development',
      'database ',
    ])
      
  ]);

  ngOnInit() {
    setInterval(() => {
      this.decrement()
    },1000);
    setInterval(() => {
      this.increase()
    },1000);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  decrement() {
    var taskList = this._timerService.getAllItems();
    taskList.forEach(task => {
      if(!task.TimerPaused && task.Time > 0) {
        task.Time = task.Time-1;
      }
    });
  }

  increase(){
    var taskList = this._timerService.getAllItems();
    taskList.forEach(task => {
        task.Times = task.Times+1;
    });
  }

  handleAdd(){
    var item= {
      ID : 0,
      Name : this.name,
      Time : 600,
      Times : 0,
      TimerPaused : false
    }
    if(this.name==''){
    }
    else{
   this._timerService.addTask(item);
   this.name='';
    }
  }
  delete(object) {
    this._timerService.deleteTask(object);
  }
  get ItemList() {
    return this._timerService.getAllItems();
  }
        open(){
          const object={
            ID : 0,
            Name : this.name,
            Time : 60,
            Times : 0,
            TimerPaused : false
          }
         
          const dialogRef = this.dialog.open(CounterComponent, {
            data: object
           });

      }

}
