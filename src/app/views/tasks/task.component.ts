import { Component, OnInit } from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Task} from "../../model/Task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[] | undefined;

  constructor(private service: DataHandlerService) { }

  ngOnInit(): void {
    this.service.taskSubject.subscribe(tasks => this.tasks = tasks);
  }

}
