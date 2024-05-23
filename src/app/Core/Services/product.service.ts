import { product } from './../models/products.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class productService {
  private readonly Api = '';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(
    private readonly http: HttpClient,
    private messageService: MessageService,
  ) {}

  /** GET Products from the server */
  getProducts(): Observable<product[]> {
    return this.http.get<product[]>(this.Api).pipe(
      tap((_) => this.log('fetched products')),
      catchError(this.handleError<product[]>('getProducts', [])),
    );
  }

  /** ADD product from the server */
  addNewProduct(product: product): Observable<product> {
    return this.http.post<product>(this.Api, product, this.httpOptions).pipe(
      tap((_) => this.log('fetched heroes')),
      catchError(this.handleError<product>('addProduct')),
    );
  }

  /** UPDATE product from the server */
  updateProduct(product: product): Observable<void> {
    return this.http.put<void>(this.Api, product, this.httpOptions).pipe(
      tap((_) => this.log('update product id=${product.id}')),
      catchError(this.handleError<void>('updateProduct')),
    );
  }

  /** DELETE product from the server */
  deleteProduct(id: number): Observable<product> {
    return this.http.delete<product>(this.Api, this.httpOptions).pipe(
      tap((_) => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<product>('deleteHero')),
    );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number): Observable<product> {
    const url = `${this.Api}/?id=${id}`;
    return this.http.get<product[]>(url).pipe(
      map((product) => product[0]), // returns a {0|1} element array
      tap((h) => {
        const outcome = h ? 'fetched' : 'did not find';
        this.log(`${outcome} hero id=${id}`);
      }),
      catchError(this.handleError<product>(`getProduct id=${id}`)),
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getProduct(id: number): Observable<product> {
    const url = `${this.Api}/${id}`;
    return this.http.get<product>(url).pipe(
      tap((_) => this.log(`fetched product id=${id}`)),
      catchError(this.handleError<product>(`getProduct id=${id}`)),
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<product[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<product[]>(`${this.Api}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found products matching "${term}"`)
          : this.log(`no products matching "${term}"`),
      ),
      catchError(this.handleError<product[]>('searchProducts', [])),
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
