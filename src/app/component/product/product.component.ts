import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/IProducts';
import { CartService } from 'src/app/service/cart.service';
import { ProductapiService } from 'src/app/service/productapi.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products :any=[];
  p: number = 1; 
  pname:any;
  // products:any;
  public productList: any;
  router: any;

  constructor(private productapi:ProductapiService,private cartService:CartService) { }

  ngOnInit(): void {

    this.getproducts();

    this.productapi.getProducts().subscribe(res=>{
      this.productList=res;

      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
  getproducts()
  {
    this.productapi.getProducts().subscribe(allProducts=>this.products=allProducts);
  }

  // addtocart(product:any){
  //   this.cartService.addtoCart(product);

  // }

  Search(){
    if(this.pname == ""){
      this.ngOnInit();
    }
    else{
      this.products = this.products.filter(res =>{
        return res.pname.toLocaleLowerCase().match(this.pname.toLocaleLowerCase());
      });
    }
  }

  prod(){

    alert("Please login");

  }

}
