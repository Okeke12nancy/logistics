import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getCurrentShipments(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/shipments`);
  }

  trackShipment(shipmentId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/shipments/track/${shipmentId}`);
  }
}
