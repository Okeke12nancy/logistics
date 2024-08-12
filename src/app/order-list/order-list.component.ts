import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import {
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface OrderResponse {
  orders: any[];
}

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, FormsModule, RouterModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css',
})
export class OrderListComponent implements OnInit {
  orders: any[] = [];
  sortKey: string = 'date';
  sortOrder: string = 'asc';

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders(): void {
    this.orderService.getOrders().subscribe((data) => {
      // this.orders = data.orders;
      this.orders = data;
    });
  }

  sort(key: string): void {
    this.sortKey = key;
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.orders.sort((a, b) => {
      if (a[key] < b[key]) return this.sortOrder === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return this.sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }

  viewOrder(id: string): void {
    this.router.navigate(['/orders', id]);
  }

  editOrder(id: string): void {
    this.router.navigate(['/orders/edit', id]);
  }

  deleteOrder(id: string): void {
    if (confirm('Are you sure you want to delete this order?')) {
      this.orderService.deleteOrder(id).subscribe(() => {
        this.fetchOrders();
      });
    }
  }
}
