import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  // form!: FormGroup;

  // fname = "";
  // lname = "";

  constructor(private cartService:CartService,private router:Router) { }

  ngOnInit(): void {

    // this.form = new FormGroup({
    //   fname: new FormControl('', [Validators.required]),
    //   lname: new FormControl('', [Validators.required]),
    // });


    this.cartService.getProducts().subscribe(res=>{
      this.products = res;
      this.grandTotal= this.cartService.getTotalPrice();
    })

    this.cartService.getProducts().subscribe(res=>{
      this.totalItem= res.length;
    })
  }

  // get f(){
  //   return this.form.controls;
  // }


  logout(){
    localStorage.removeItem('token');
    this.cartService.removeAllCart();
    this.router.navigateByUrl('/login');

  // }

}
}
