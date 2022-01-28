import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/IProducts';
import { ProductapiService } from 'src/app/service/productapi.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //products : IProducts[] = []; 

  products:any;

  constructor(private productapi:ProductapiService) { }

  ngOnInit(): void {
    this.getproducts();
  }
  getproducts()
  {
    this.productapi.getProducts().subscribe(allProducts=>this.products=allProducts);
  }

}
