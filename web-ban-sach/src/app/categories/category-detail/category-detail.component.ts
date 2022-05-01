import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from 'src/app/shared/book.model';
import { BooksService } from 'src/app/shared/books.service';
import { Category } from 'src/app/shared/categories.model';
import { CategoriesService } from 'src/app/shared/categories.service';

declare var M:any;
@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
  providers:[BooksService],
})
export class CategoryDetailComponent implements OnInit {
  category: Category;

  //id: string;
  id: number
  cateID: string;
  books: Book[]=[];
  constructor(private categoriesService: CategoriesService,
              private booksService: BooksService,
              private router: Router,
              private route: ActivatedRoute,
              public _bookService: BooksService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.category = this.categoriesService.getCateFromIndex(this.id);
        this.onBook(this.id.toString());
        console.log(this.books);
        console.log(this.id);
        console.log(this.cateID);
      }
    );    
  }
  onEditCategory() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDeleteCategory() {
    {
      if(confirm('Are you sure to delete')==true){
        this.categoriesService.deleteCategory(this.category._id).subscribe((res)=>{
          this.router.navigate(['../'], {relativeTo: this.route});
          M.toast({html:'Delete Successfully',class:'rounded'});
        })
      }
    }
  }
  onBook(_cateID: string){
    this._bookService.getBookByCategory(_cateID).subscribe((res)=>{
      this._bookService.books=res as Book[];
    });
  }
}
