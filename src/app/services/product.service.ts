import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {
    console.log('Product Service')
  }
  //get Api
  getProductListWithHttp() {
    const url = 'https://dummyjson.com/products'
    return this.http.get(url)
  }

  getProductData() {
    return [
      { name: 'Product 1', price: 100, company: 'Company 1' },
      { name: 'Product 2', price: 200, company: 'Company 2' },
      { name: 'Product 3', price: 300, company: 'Company 3' },
      { name: 'Product 4', price: 400, company: 'Company 4' },
      { name: 'Product 5', price: 500, company: 'Company 5' },
      { name: 'Product 6', price: 600, company: 'Company 6' },
      { name: 'Product 7', price: 700, company: 'Company 7' },
      { name: 'Product 8', price: 800, company: 'Company 8' },
      { name: 'Product 9', price: 900, company: 'Company 9' },
      { name: 'Product 10', price: 1000, company: 'Company 10' },
    ]
  }
}
