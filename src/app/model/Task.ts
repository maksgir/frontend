import {Priority} from "./Priority";
import {Category} from "./Category";
import {Data} from "@angular/router";

export class Task{
  id: number | undefined;
  title: string | undefined;
  completed: boolean | undefined;
  priority?: Priority | undefined;
  category?: Category | undefined;
  date?: Data | undefined;


  constructor(id: number | undefined, title: string | undefined, completed: boolean | undefined, priority: Priority | undefined, category: Category | undefined, date: Data | undefined) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.priority = priority;
    this.category = category;
    this.date = date;
  }
}
