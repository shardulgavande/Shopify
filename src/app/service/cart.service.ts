import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any=[]
  public productList=new BehaviorSubject<any>([]);
  public search= new BehaviorSubject<string>("");
  


  constructor() { }

  getProducts(){
    console.log(this.productList);
    return this.productList.asObservable();
  }

  setProduct(product:any){
    console.log(product);
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product:any,pquantity:any){
    //const _product={product:product,quantity:pquantity};
    // console.log(pquantity);
    
    product.pquantity = pquantity;
    product.itemtotal = product.pprice * product.pquantity;
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }

  getTotalPrice():number{
   let grandTotal=0;
    this.cartItemList.map((a:any)=>{

    console.log(a);

    //  this.pprice += a.product.pprice * a.product.pquantity;
    // grandTotal+=a.product.pprice*q;
     grandTotal+= a.itemtotal;
    });
    return grandTotal;
  }

  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1)
      }
    })
  }

  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
