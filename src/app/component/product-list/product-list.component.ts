import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { response } from 'express';
import { ProductapiService } from 'src/app/service/productapi.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //products : IProducts[] = []; 

  products:any;
  pname:any;
  p: number = 1; 
  constructor(private productapi:ProductapiService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getproducts();
  }
  getproducts()
  {
    this.productapi.getProducts().subscribe(allProducts=>this.products=allProducts);
  }

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

  deleteProducts(id:any):void {
  //  console.log(this.products.id);
    this.productapi.delete(id)
      .subscribe(
        response => {
          console.log(response);
          alert("Data deleted sucessfully");
          this.router.navigate(['/dashboard/products/list'])
            .then(() => {
            window.location.reload();
          });
        },
        error => {
          console.log(error);
        });
  }
}
