import {Component, inject, OnDestroy} from '@angular/core';
import {Customer, CustomerService} from "../../shared/services/customer.service";

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnDestroy {
  //...
  customerService = inject(CustomerService);
  customers: Customer[] = this.customerService.getCustomers();

  // constructor(private customerService: CustomerService) {}

  ngOnDestroy(): void {
    //...
  }
}
