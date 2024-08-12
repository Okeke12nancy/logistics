import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-logistics-manager-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './logistics-manager-dashboard.component.html',
  styleUrl: './logistics-manager-dashboard.component.css',
})
export class LogisticsManagerDashboardComponent {
  orders = [
    { id: 'order1', selected: false },
    { id: 'order2', selected: false },
    { id: 'order3', selected: false },
  ];

  selectedOrders: string[] = [];

  createOrder() {
    console.log('Create order clicked');
  }

  manageOrders() {
    console.log('Manage orders clicked');
  }

  toggleOrderSelection(orderId: string) {
    const index = this.selectedOrders.indexOf(orderId);
    if (index > -1) {
      this.selectedOrders.splice(index, 1);
    } else {
      this.selectedOrders.push(orderId);
    }
  }

  assignSelectedOrders() {
    console.log('Assigning the following orders:', this.selectedOrders);
  }
}
