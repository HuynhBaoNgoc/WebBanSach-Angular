import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book.model';
import { BooksService } from '../shared/books.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksList();
  }
  booksList(){
    this.booksService.getBooks().subscribe((res)=>{
      this.booksService.books = res as Book[];
    });
  }
}
