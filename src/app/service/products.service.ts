import { register } from 'node:module';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interface/products';
const apiURL=environment.apiUrl
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
getinformation(){
  const register = localStorage.getItem('data');
  return register ? JSON.parse(register) : [];
}
  
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<{ data: Product[] }> {
    return this.http.get<{ data: Product[] }>(`${apiURL}/api/v1/products`);
  }
  islogin = new BehaviorSubject<boolean>(false);
}