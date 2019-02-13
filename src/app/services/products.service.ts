import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly base_url = "https://5bd49f4e9325280013d2883f.mockapi.io/";
  constructor() { }
}
