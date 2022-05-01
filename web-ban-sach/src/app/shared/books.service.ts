import { EventEmitter, Injectable } from "@angular/core";
import { Book } from "./book.model";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class BooksService {
    selectedBook!: Book;
    //bookSelected = new EventEmitter<Book>();
    
    public isChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    books: Book[] = [];

    //listOfBook = new EventEmitter<>(this.books);
    // dataEmitter = new EventEmitter<any[]>();
    // subject: ReplaySubject<any> = new ReplaySubject();
    // obs: Observable<any> = this.subject.asObservable;

    // notify = (data: any) => {
    //     this.subject.next(data)
    // }

    readonly baseURL='http://localhost:3000/products';
    constructor(private http: HttpClient) {}
    
    addBook(book: Book){
        return this.http.post(this.baseURL, book);
    }
    getBookFromIndex(index: number) 
    {
        return this.books[index];
    }
    getBooksByID(_id:string){
        return this.http.get(this.baseURL + `/filter/` + `/${_id}`);
    }
    getBooks(){
        return this.http.get(this.baseURL);
    }
    getBook(_id:string) {
        return this.http.get(this.baseURL + `/${_id}`);
    }
    getBookByCategory(_id:string) {
        return this.http.get(this.baseURL + `/filter/` + `${_id}`);
    }
    updateBook(book: Book){
        return this.http.put(this.baseURL + `/${book._id}`,book);
    }
    deleteBook(_id:string){
        return this.http.delete(this.baseURL + `/${_id}`);
    }
}