import { OrderService } from 'shared/services/order.service';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core' ;

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  order$;
  constructor(
    private authservice: AuthService,
    private orderService: OrderService
  ) {
    this.order$ = authservice.user$.switchMap(u => orderService.getOrdersByUser(u.uid));
   }

  ngOnInit() {
  }

}
