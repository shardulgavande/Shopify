import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public products : any=[];
  public grandTotal !: number;
  totalItem: any;
  public uid:any;
  // form!: FormGroup;

  // fname = "";
  // lname = "";

  constructor(private cartService:CartService, private orderservice: OrderService, private router:Router) { }

  ngOnInit(): void {

    // this.form = new FormGroup({
    //   fname: new FormControl('', [Validators.required]),
    //   lname: new FormControl('', [Validators.required]),
    // });
    this.uid = sessionStorage.getItem('uid');

    this.cartService.getProducts().subscribe(res=>{
      this.products = res;
      this.grandTotal= this.cartService.getTotalPrice();
    })

    this.cartService.getProducts().subscribe(res=>{
      this.totalItem= res.length;
    })
  }

    saveOrderItems(){
      console.log(this.products);
      this.products.map((prd:any)=>{
        const oitem = {
          oid: 1,
          pid: prd.id,
          pname: prd.pname,
          pprice: prd.pprice,
          pquantity: prd.pquantity,
          ptotal: prd.itemtotal
        }

        this.orderservice.createItem(oitem)
      .subscribe(
        response => {
          console.log(response);
          alert("Order added sucess");
          //this.submitted = true;
        },
        error => {
          console.log(error);
        });

        console.log('prd id ' + prd.id);
        console.log(oitem);

        //  this.pprice += a.product.pprice * a.product.pquantity;
        // grandTotal+=a.product.pprice*q;
        //  grandTotal+= a.itemtotal;
        });
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
