import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { IProducts } from 'src/app/IProducts';
import { CartService } from 'src/app/service/cart.service';
import { ProductapiService } from 'src/app/service/productapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 // quantity:any;
 
 // qid = (<HTMLInputElement>document.getElementById("quantity")).value;
  products : any=[];
  // products:any;
  public productList: any;
  public totalItem:number=0;
  //pQuantity = 2;

  constructor(private router:Router,private userService:UserService,
    private productapi:ProductapiService,private cartService:CartService) { }

  ngOnInit(): void {



    this.getproducts();

    this.cartService.getProducts().subscribe(res=>{
      this.totalItem= res.length;
    })

    this.productapi.getProducts().subscribe(res=>{

      this.productList=res;

      this.productList.forEach((a:any)=>{
        // qid = ((document.getElementById("quantity") as HTMLInputElement).value);
        Object.assign(a,{quantity:1,total:a.price});
      });
    })


  }
  getproducts()
  {
    this.productapi.getProducts().subscribe(allProducts=>this.products=allProducts);
  }

  addtocart(product:any,qid:any){
    console.log(product.id);
   // qid = ((document.getElementById("{{'quantity' + product.id}}") as HTMLInputElement).value);
    this.cartService.addtoCart(product,qid);
    console.log(qid);
  }

  logout(){
    localStorage.removeItem('token');
    this.cartService.removeAllCart();
    this.router.navigateByUrl('/login');

  }

}
