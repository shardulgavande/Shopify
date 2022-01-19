import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/IProducts';
import { ProductapiService } from 'src/app/service/productapi.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : IProducts[] = []; 

  constructor(private productapi:ProductapiService) { }

  ngOnInit(): void {
    this.getproducts();
  }
  getproducts()
  {
    this.productapi.getProducts().subscribe(allProducts=>this.products=allProducts);
  }

}
