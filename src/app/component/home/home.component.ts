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

  products : IProducts[] = [];
  // products:any;
  public productList: any;
  public totalItem:number=0;
  pQuantity = 2;

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
        Object.assign(a,{quantity:this.pQuantity,total:a.price});
      });
    })


  }
  getproducts()
  {
    this.productapi.getProducts().subscribe(allProducts=>this.products=allProducts);
  }

  addtocart(product:any){
    this.cartService.addtoCart(product,this.pQuantity);

  }

  logout(){
    localStorage.removeItem('token');
    this.cartService.removeAllCart();
    this.router.navigateByUrl('/login');

  }

}
