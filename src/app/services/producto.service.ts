import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urlBase  = 'http://localhost:8080/api/v1/productos';
  constructor(private ClienteHttp: HttpClient) { }

  getProducts(): Observable <Producto[]>{
    return this.ClienteHttp.get<Producto[]>(this.urlBase);
  }


  getProduct(id: number): Observable<Producto>{
    return this.ClienteHttp.get<Producto>(`${this.urlBase}/${id}`);
  }

  addProduct(producto: Producto): Observable<Object>{
    return this.ClienteHttp.post(this.urlBase, producto);
  }

  editProduct(id: number, producto: Producto): Observable<Object>{
    return this.ClienteHttp.put(`${this.urlBase}`, producto);
  }

  deleteProduct(id: number): Observable<Object>{
    return this.ClienteHttp.delete(`${this.urlBase}/${id}`);
  }
}
