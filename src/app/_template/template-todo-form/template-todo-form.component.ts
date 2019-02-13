import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../_interface/todo';

@Component({
  selector: 'app-template-todo-form',
  templateUrl: './template-todo-form.component.html',
  styleUrls: ['./template-todo-form.component.scss']
})
export class TemplateTodoFormComponent implements OnInit {

  public toDo$: ToDo;

  constructor() {
    this.toDo$ = {
      id: undefined,
      label: undefined,
      status: false,
      position: undefined
    };
  }

  ngOnInit() {
  }

  public createToDo(event?: any): void {
    console.log('wird an Server übermittelt');
    this.toDo$ = {
      id: undefined,
      label: undefined,
      status: false,
      position: undefined
    };
  }

}
