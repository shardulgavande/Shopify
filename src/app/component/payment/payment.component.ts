import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';
import { UserService } from 'src/app/service/user.service';
import { DatePipe } from '@angular/common'
import { IOrder } from '../IOrder';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  form!: FormGroup;

 public address = "";

  public products : any=[];
  public grandTotal !: number;
  totalItem: any;
  public uid:any;
  public i :any=45654654;

  user:any;





  public paymentmode:string = 'Cash On Delivery';
  date=new Date();
  public orderdt:any;

  // form!: FormGroup;

  // fname = "";
  // lname = "";

  constructor(private cartService:CartService,private router:Router,private userService:UserService,
                private route: ActivatedRoute,private orderservice:OrderService,public datepipe: DatePipe) { }

  ngOnInit(): void {

    // this.form = new FormGroup({
    //   fname: new FormControl('', [Validators.required]),
    //   lname: new FormControl('', [Validators.required]),
    // });
    this.uid = sessionStorage.getItem('uid');


    this.form = new FormGroup({
      address: new FormControl()

    });


    // this.getUser(this.route.snapshot.paramMap.get('id'));


    this.cartService.getProducts().subscribe(res=>{
      this.products = res;
      this.grandTotal= this.cartService.getTotalPrice();
    })

    this.cartService.getProducts().subscribe(res=>{
      this.totalItem= res.length;
    })
  }

    saveOrderItems(){
      let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');

      console.log("Add",this.form.value.address);


      const data = {


        ordernumber: 11,
        uid: this.uid,
        address: this.form.value['address'],
        ordertotal:this.grandTotal,
        odate: latest_date

      };

      console.log(data);
      this.orderservice.create(data)

      .subscribe(
        response => {
          console.log("Order added successfully");
          console.log('UID:',this.uid)
          console.log(response);
          this.orderdt = response;
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


  get f(){
    return this.form.controls;
  }


//   logout(){
//     localStorage.removeItem('token');
//     this.cartService.removeAllCart();
//     this.router.navigateByUrl('/login');



// }

// getUser(id:any):void{
//   this.userService.find(id)
//     .subscribe(
//       data =>{
//         this.user = data;
//         console.log(data);
//         console.log(id);
//       },
//       error => {
//         console.log(error);
//       });
// }

// insertOrder():void {
//   const data = {

//     ordernumber: 11,
//     uid: this.uid,
//     address: this.form.value,
//     ordertotal:this.grandTotal

//   };
//   this.orderservice.create(data)
//       .subscribe(
//         response => {
//           console.log("Order added successfully");
//           console.log('UID:',this.uid)
//           console.log(response);

//           //this.submitted = true;
//         },
//         error => {
//           console.log(error);
//         });
// }
}


