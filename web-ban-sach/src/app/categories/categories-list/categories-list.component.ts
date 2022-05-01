import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/shared/book.model';
import { BooksService } from 'src/app/shared/books.service';
import { Category } from 'src/app/shared/categories.model';
import { CategoriesService } from 'src/app/shared/categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
  providers: [BooksService],
})
export class CategoriesListComponent implements OnInit {
  isChanged: boolean;
  categories: Category[];
  constructor(public categoriesService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute,
    public _bookService: BooksService) {
    this.categoriesService.isChanged.subscribe(value => {
      this.isChanged = value;
    });
  }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((res)=>{
      this.categoriesService.categories=res as Category[];
    });
  }
  onNewCategory() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  productList(_cateID: string) {
    this._bookService.getBookByCategory(_cateID).subscribe((res) => {
      this._bookService.books = res as Book[];
    });
  }
  onRefresh() {
    this.ngOnInit();
  }
}
