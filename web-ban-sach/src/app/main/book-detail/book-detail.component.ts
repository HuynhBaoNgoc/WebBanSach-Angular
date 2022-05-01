import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from 'src/app/shared/book.model';
import { BooksService } from 'src/app/shared/books.service';

declare var M:any;

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: Book;
  _id: string;
  constructor(public booksService: BooksService,
              private route: ActivatedRoute,
              private router: Router) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this._id = params['id'];
        console.log(this._id);
        this.booksService.getBook(this._id).subscribe((res) => {
          console.log(this._id);
          this.booksService.selectedBook = res as Book;
          this.book = this.booksService.selectedBook;
        });
      }
    );
  }
  onEditBook() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDeleteBook() {
    if(confirm('Are you sure to delete')==true){
      this.booksService.deleteBook(this.book._id).subscribe((res)=>{
        this.router.navigate(['../'], {relativeTo: this.route});
        M.toast({html:'Delete Successfully',class:'rounded'});
      })
    }
  }
  onGetBook(_productID: string){
    this.booksService.getBooksByID(_productID).subscribe((res)=>{
      this.booksService.books=res as Book[];
    });
  }
}
