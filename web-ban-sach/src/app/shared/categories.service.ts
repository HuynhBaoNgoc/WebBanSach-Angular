import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Category } from "./categories.model";

@Injectable({
    providedIn: 'root',
})

export class CategoriesService {
    selectedCategory!: Category;
    categorySelected = new EventEmitter<Category>();
    public isChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    categories: Category[] = [];
    readonly baseURL='http://localhost:3000/categories';
    constructor(private http: HttpClient) {}
    getCateFromIndex(index: number) 
    {
        return this.categories[index];
    }
    getCategories() {
        return this.http.get(this.baseURL);
    }
    getCategory(_id: number) 
    {
        return this.http.get(this.baseURL + `/${_id}`);
    }
    addCategory(category: Category)
    {
       return this.http.post(this.baseURL, category);
    }
    updateCategory(newCategory: Category) 
    {
        return this.http.put(this.baseURL + `/${newCategory._id}`,newCategory);
    }
    deleteCategory(_id: string)
    {
        return this.http.delete(this.baseURL + `/${_id}`);
    }
}