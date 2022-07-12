import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] | undefined;

  selectedCategory: Category | undefined;

  constructor(private service: DataHandlerService) {
  }


  //метод вызывается автоматически после инициализации компонента
  ngOnInit(): void {
    this.service.categorySubject.subscribe(category => this.categories = category);

  }

  showTasksByCategory(category: Category) {
    this.selectedCategory = category;
    this.service.fillTasksByCategory(category);
  }
}
