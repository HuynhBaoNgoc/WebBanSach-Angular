import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book.model';
import { BooksService } from '../shared/books.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  isChanged: boolean;
  totalRecords: Number;
  page: Number = 1;
  cart: any [] = [];
  books:Book[]=[]
  constructor(public booksService: BooksService) { }
 
  ngOnInit(): void {
    var x = JSON.parse(localStorage.getItem("Cart")||'[]');
    this.books=x;
    console.log(x.length);
    this.booksService.getBooks().subscribe((res)=>{
      this.booksService.books=res as Book[];
      this.totalRecords = this.books.length;
    });
  }
}
