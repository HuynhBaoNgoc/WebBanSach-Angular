import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart/cart.component";
import { CategoriesStartComponent } from "./categories/categories-start/categories-start.component";
import { CategoriesComponent } from "./categories/categories.component";
import { CategoryDetailComponent } from "./categories/category-detail/category-detail.component";
import { CategoryEditComponent } from "./categories/category-edit/category-edit.component";
import { ListComponent } from "./list/list.component";
import { ListdetailComponent } from "./listdetail/listdetail.component";
import { LoginComponent } from "./login/login.component";
import { BookDetailComponent } from "./main/book-detail/book-detail.component";
import { BookEditComponent } from "./main/book-edit/book-edit.component";
import { BooksStartComponent } from "./main/books-start/books-start.component";
import { MainComponent } from "./main/main.component";
import { RegisterComponent } from "./register/register.component";

const appRoutes:Routes = [
    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: 'main', component: MainComponent, 
       children: [
           {path: '', component: BooksStartComponent},
           {path: 'new', component: BookEditComponent},
           {path: ':id', component: BookDetailComponent},
           {path: ':id/edit', component: BookEditComponent}
       ]
    },
    {path: 'categories', component: CategoriesComponent,
        children: [
            {path: '', component: CategoriesStartComponent},
            {path: 'new', component: CategoryEditComponent},
            {path: ':id', component: CategoryDetailComponent},
            {path: ':id/edit', component: CategoryEditComponent}
        ]
    },
    {path: 'register', component: RegisterComponent,},
    {path: 'login', component: LoginComponent,},
    {path: 'list', component: ListComponent,},
    {path: 'listdetail/:id', component: ListdetailComponent,},
    {path: 'cart', component: CartComponent,}
];
@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule {
}