import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductapiService } from 'src/app/service/productapi.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

    product:any;
    

  constructor(
    private productService:ProductapiService,
    private route: ActivatedRoute,
    private router: Router)
    { }

  ngOnInit(): void {
    this.getProducts(this.route.snapshot.paramMap.get('id'));
  }

  getProducts(id:any):void{
    this.productService.get(id)
      .subscribe(
        data =>{
          this.product = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
