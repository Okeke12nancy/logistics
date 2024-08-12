import { Component, OnInit } from '@angular/core';
import { DispatcherService } from '../services/dispatcher.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dispatcher-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './dispatcher-dashboard.component.html',
  styleUrl: './dispatcher-dashboard.component.css',
})
export class DispatcherDashboardComponent implements OnInit {
  shipments: any[] = [];

  constructor(private dispatcherService: DispatcherService) {}

  ngOnInit(): void {
    this.dispatcherService.getAssignedShipments().subscribe((data) => {
      this.shipments = data.shipments;
    });
  }

  updateStatus(shipmentId: string) {}
}
