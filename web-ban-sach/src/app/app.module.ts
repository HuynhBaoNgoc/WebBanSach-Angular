import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BooksListComponent } from './main/books-list/books-list.component';
import { BookDetailComponent } from './main/book-detail/book-detail.component';
import { BookEditComponent } from './main/book-edit/book-edit.component';
import { BookItemComponent } from './main/books-list/book-item/book-item.component';
import { CategoriesComponent } from './categories/categories.component';
import { BooksStartComponent } from './main/books-start/books-start.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BooksService } from './shared/books.service';
import { CategoriesService } from './shared/categories.service';
import { CategoriesStartComponent } from './categories/categories-start/categories-start.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CategoryEditComponent } from './categories/category-edit/category-edit.component';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { CategoryItemComponent } from './categories/categories-list/category-item/category-item.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { ListdetailComponent } from './listdetail/listdetail.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BooksListComponent,
    BookDetailComponent,
    BookEditComponent,
    BookItemComponent,
    CategoriesComponent,
    BooksStartComponent,
    CategoriesStartComponent,
    CategoriesListComponent,
    CategoryEditComponent,
    CategoryDetailComponent,
    CategoryItemComponent,
    RegisterComponent,
    LoginComponent,
    ListComponent,
    ListdetailComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [BooksService, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
