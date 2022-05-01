import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../shared/book.model';
import { BooksService } from '../shared/books.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  isChanged: boolean;
  books: Book[];
  totalRecords: Number;
  page: Number = 1;
  cart: any [] = [];
  constructor(public booksService: BooksService,
              private router: Router,
              private route: ActivatedRoute) 
  { 
    this.booksService.isChanged.subscribe( value => {
      this.isChanged = value;
    });
  }

  ngOnInit(): void {    
    this.booksService.getBooks().subscribe((res)=>{
      this.booksService.books=res as Book[];
      this.totalRecords = this.books.length;
    });
  }
  onNewBook() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  AddToCart(book: Book)
  {
    this.cart.push(book);
    localStorage.setItem('Cart',JSON.stringify(this.cart));
  }
  onRefresh() {
    this.ngOnInit();
  }
}
