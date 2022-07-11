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

  constructor(private service: DataHandlerService) {
  }


  //метод вызывается автоматически после инициализации компонента
  ngOnInit(): void {
    this.categories = this.service.getCategories();
    // console.log(this.categories);

  }

}
