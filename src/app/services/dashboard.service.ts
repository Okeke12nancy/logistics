import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private baseUrl = 'http://localhost:3000/api'; 

  constructor(private http: HttpClient) {}

  getAdminDashboardData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/admin-dashboard`);
  }
}
