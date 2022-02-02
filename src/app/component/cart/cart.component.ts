import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public totalItem:number=0;

  public products : any=[];
  public grandTotal !: number;
  public total!: number;

  constructor(private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.products = res;
      this.total = this.cartService.getTotalPrice();
      this.grandTotal= this.cartService.getTotalPrice();
    })

    this.cartService.getProducts().subscribe(res=>{
      this.totalItem= res.length;
    })


  }

  removeItem(product:any){
    this.cartService.removeCartItem(product);
  }

  emptycart(){
    this.cartService.removeAllCart();
  }

  // logout(){
  //   localStorage.removeItem('token');
  //   this.cartService.removeAllCart();
  //   this.router.navigateByUrl('/login');

  // }


}
