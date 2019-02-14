import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly base = 'https://5bd49f4e9325280013d2883f.mockapi.io/';
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.base);
  }
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.base, product);
  }
  removeProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(this.base + id);
  }
  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.base + id);
  }
}
