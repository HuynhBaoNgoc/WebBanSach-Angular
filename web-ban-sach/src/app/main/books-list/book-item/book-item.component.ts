import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book.model';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Input() index: number;
  cart: any [] = [];
  constructor(public booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.selectedBook= this.book;
  }
  AddToCart(book: Book)
  {
    this.cart.push(book);
    localStorage.setItem('Cart',JSON.stringify(this.cart));
  }
}
