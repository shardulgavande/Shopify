import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public products : any=[];
  public grandTotal !: number;

  constructor(private cartService:CartService,private router:Router) { }

  ngOnInit(): void {

    this.cartService.getProducts().subscribe(res=>{
      this.products = res;
      this.grandTotal= this.cartService.getTotalPrice();
    })
  }

}
