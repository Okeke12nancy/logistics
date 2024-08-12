import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { OrderService } from '../services/order.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterModule],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.css',
})
export class OrderDetailComponent implements OnInit {
  order: any;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.orderService.getOrderById(id).subscribe((data) => {
        this.order = data.order;
      });
    } else {
      console.error('ID is null');
    }
  }

  deleteOrder(): void {
    if (confirm('Are you sure you want to delete this order?')) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id !== null) {
        this.orderService.deleteOrder(id).subscribe(() => {
          this.router.navigate(['/orders']);
        });
      } else {
        console.error('ID is null. Cannot delete order.');
        this.router.navigate(['/error']);
      }
    }
  }
}
