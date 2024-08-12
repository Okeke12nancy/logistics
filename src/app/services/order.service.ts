import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://your-api-url.com/api/orders';

  constructor(private http: HttpClient) {}

  getOrderById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createOrder(order: any): Observable<any> {
    return this.http.post(this.apiUrl, order);
  }

  updateOrder(order: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${order.id}`, order);
  }

  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteOrder(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
