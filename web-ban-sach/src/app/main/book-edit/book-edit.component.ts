import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from 'src/app/shared/book.model';
import { BooksService } from 'src/app/shared/books.service';
import { Category } from 'src/app/shared/categories.model';
import { CategoriesService } from 'src/app/shared/categories.service';
import { BooksListComponent } from '../books-list/books-list.component';

declare var M:any;

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
  providers: [CategoriesService],
})
export class BookEditComponent implements OnInit {
  @Output() updateView = new EventEmitter();
  book: Book;
  id: number;
  _id: string;
  editMode = false;
  bookForm: FormGroup;
  constructor(private route: ActivatedRoute, 
              private booksService: BooksService, 
              private router: Router, 
              public categoriesService: CategoriesService,) 
  { }
  ngOnInit(): void {
    this.cateList();
    this.resetForm();
    this.route.params.subscribe(
      (params: Params) => {
        this._id = params['id'];
        console.log(this._id);
        this.editMode = params['id'] != null;
        this.booksService.getBook(this._id).subscribe((res) => {
          console.log(this._id);
          this.booksService.selectedBook = res as Book;
          this.book = this.booksService.selectedBook;
          console.log(this.book.name);
          this.initForm();
        });
      }
    );
  }
  private initForm() {
    let _id = ''
    let bookName = '';
    let productID = '';
    let bookPrice = 0;
    let bookImgPath = '';
    let description = '';
    let cateID = "";
    if (this.editMode) 
    {
      _id = this.book._id
      bookName = this.book.name;
      productID = this.book.productID;
      bookPrice = this.book.price;
      bookImgPath = this.book.imgPath;
      description = this.book.description;
      cateID = this.book.cateID;
    }
    this.bookForm = new FormGroup({
      '_id': new FormControl(_id, Validators.required),
      'name': new FormControl(bookName, Validators.required),
      'productID': new FormControl(productID, Validators.required),
      'price': new FormControl(bookPrice, Validators.required),
      'imgPath': new FormControl(bookImgPath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'cateID': new FormControl(cateID, Validators.required)
    });
  }
  cateList(){
    this.categoriesService.getCategories().subscribe((res)=>{
      this.categoriesService.categories=res as Category[];
    });
  }
  onSubmit(form: FormGroup) {
    console.log(form.value.cateID);
    if(this.editMode == false){
      this.booksService.addBook(form.value).subscribe((res)=>{
        this.resetForm();
        this.booksService.isChanged.next(true);
      });
    }
    else{
      this.booksService.updateBook(form.value).subscribe((res)=>{
        this.resetForm();
        this.updateView.emit();
        M.toast({html:'Edit Successfully',class:'rounded'});
      });
    }
  }
  resetForm(){
    if(this.bookForm){
      this.bookForm.reset();
    }
    this.booksService.selectedBook={
      _id:"",
      name:"",
      productID:"",
      price: 0,
      description:"",
      imgPath:"",
      cateID: "",
    }
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
