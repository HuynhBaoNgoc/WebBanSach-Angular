import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book.model';
import { BooksService } from '../shared/books.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers:[BooksService],
})
export class CategoriesComponent implements OnInit {

  constructor(public _bookService: BooksService) { }
  ngOnInit(): void {
  }
}
