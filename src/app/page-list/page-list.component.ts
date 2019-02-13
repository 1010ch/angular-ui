import { Component, OnInit} from '@angular/core';
import { ToDo } from '../_interface/todo';
import { EventPing} from '../_interface/eventping';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  public toDoShow: boolean;
  public toDoDoneShow: boolean;
  public $toDos: ToDo[];
  public $toDosDone: ToDo[];

  constructor() {
    this.toDoShow = true;
    this.toDoDoneShow = false;
    this.$toDos = [
      {
        id: 0,
        label: 'Rechnung bezahlen',
        status: false,
        position: 1
      },
      {
        id: 1,
        label: 'Schlafen..',
        status: false,
        position: 2
      }
    ];
    this.$toDosDone = [];
  }


  ngOnInit() {
  }

  public create(event: ToDo): void {
    event.position = this.$toDos.length + 1;
    this.$toDos.push(event);
  }

  public update(event: EventPing): void {
    if ('check' === event.label) {
      console.log('check');
      if (!event.object.status) {
        this.$toDosDone.splice(this.$toDosDone.indexOf(event.object), 1);
        this.$toDos.push(event.object);
      } else {
        this.$toDos.splice(this.$toDos.indexOf(event.object), 1);
        this.$toDosDone.push(event.object);
      }
    }
    if ('delete' === event.label) {
      console.log('delete');
      if (event.object.status) {
        this.$toDosDone.splice(this.$toDosDone.indexOf(event.object), 1);
      } else {
        this.$toDos.splice(this.$toDos.indexOf(event.object), 1);
      }
    }
    if ('label' === event.label) {
      console.log('delete');
      if (event.object.status) {
        this.$toDosDone.forEach((toDo: ToDo) => {
          if (toDo.id === event.object.id) {
            toDo.label = event.object.label;
          }
        });
      } else {
        this.$toDos.forEach((toDo: ToDo) => {
          if (toDo.id === event.object.id) {
            toDo.label = event.object.label;
          }
        });
      }
    }
  }

}
