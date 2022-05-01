import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/categories.model';
import { CategoriesService } from 'src/app/shared/categories.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {
  @Input() category: Category;
  @Input() index: number;
  constructor(public categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.selectedCategory= this.category;
  }
}
