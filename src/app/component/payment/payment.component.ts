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
  totalItem: any;

  constructor(private cartService:CartService,private router:Router) { }

  ngOnInit(): void {

    this.cartService.getProducts().subscribe(res=>{
      this.products = res;
      this.grandTotal= this.cartService.getTotalPrice();
    })

    this.cartService.getProducts().subscribe(res=>{
      this.totalItem= res.length;
    })
  }

  logout(){
    localStorage.removeItem('token');
    this.cartService.removeAllCart();
    this.router.navigateByUrl('/login');

  }

}
