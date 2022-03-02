import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';
import { DatePipe } from '@angular/common'
import { IOrder } from '../IOrder';


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
  public paymentmode:string = 'Cash On Delivery';
  date=new Date();
  public orderdt:any;
  public ordernum:any;
  public coupon: any;
  @ViewChild('coupon') inputName;
  //public ordernum :any=(Math.floor(100000 + Math.random() * 900000));
  public edited : boolean = false;

  form!: FormGroup;

  // fname = "";
  // lname = "";

  constructor(private cartService:CartService, private orderservice: OrderService, private router:Router,
    public datepipe: DatePipe) { }

  ngOnInit(): void {
    
    // this.form = new FormGroup({
    //   fname: new FormControl('', [Validators.required]),
    //   lname: new FormControl('', [Validators.required]),
    // });
    this.uid = sessionStorage.getItem('uid');

    this.form = new FormGroup({

      address: new FormControl()
    });

    this.cartService.getProducts().subscribe(res=>{
      this.edited = true;
      this.products = res;
      this.grandTotal= this.cartService.getTotalPrice();
    })

    
    this.cartService.getProducts().subscribe(res=>{
      this.totalItem= res.length;
      if (this.totalItem > 0) {
        this.ordernum =(Math.floor(100000 + Math.random() * 900000));
      }
     
    })
  }
  
  applycoupon(coupon:any){
    console.log(coupon);
    
    if(coupon == "shopify20") {
      if(this.grandTotal > 1000) {
        this.grandTotal= this.cartService.getTotalPrice();  
        console.log(this.grandTotal);
        //this.grandTotal * 0.2;
        var discount = Math.round(this.grandTotal * 0.2);
        this.grandTotal = this.grandTotal - discount;
        console.log(this.grandTotal * 0.2);
      }
      else {
        alert("Coupon can be applied only above ₹1000");
      }
    }
    else {
      alert("Please enter valid coupon code");
    }
  }

  saveOrderItems(){
    let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
    const data = {
      ordernumber: this.ordernum,
      uid: this.uid,
      address: this.form.value['address'],
      ordertotal:this.grandTotal,
      odate: latest_date
    };
   
    this.orderservice.create(data)
      .subscribe(
        resp => {
          console.log(resp);
          console.log("Order added successfully");
          console.log('UID:',this.uid)
          
          this.orderdt = resp;
          this.products.map((prd:any)=>{
            const oitem = {
              oid: this.orderdt.id,
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
                //alert("Order added sucess");
                //this.submitted = true;
              },
              error => {
                console.log(error);
              });
            });
            const payment = {
              oid: this.orderdt.id,
              uid: this.uid,
              status: 'Completed',
              paymentmode: this.paymentmode,
              date: latest_date
            }

            this.orderservice.createPayment(payment)
            .subscribe(
              response => {
                console.log(response);
                alert("Thank You for Shopping with Us");
                this.removecart();
                //this.submitted = true;
              },
              error => {
                console.log(error);
              });
        },
        error => {
          console.log(error);
    });
  }

  removecart(){
    this.cartService.removeAllCart();
    this.router.navigateByUrl('/home');
  }

  get f(){
    return this.form.controls;
  }
   
  clearsearch(){
    this.inputName.nativeElement.value = ' ';
    this.grandTotal= this.cartService.getTotalPrice();
    
  }

  logout(){
    localStorage.removeItem('token');
    this.cartService.removeAllCart();
    this.router.navigateByUrl('/login');
  // }
  }
}


