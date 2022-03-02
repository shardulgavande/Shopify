import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductapiService } from 'src/app/service/productapi.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product:any;
  /* productI = {
    id: '',
    pname: '',
    pprice: 1,
    pdesc: '',
    pimage: '',
    pquantity: 1,
    subcat_id: 1
  }; */

  constructor(
    private productService:ProductapiService,
    private route: ActivatedRoute,
    private router: Router)
    { }

  ngOnInit(): void {
   this.getProducts(this.route.snapshot.paramMap.get('id'));

  }

  public user={username:null,age:null}



  getProducts(id:any):void{
    console.log(id);
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

  updateProducts():void {
    const data = {
      id: this.product.id,
      pname: this.product.pname,
      pprice: this.product.pprice,
      pdesc: this.product.pdesc,
      pimage: this.product.pimage,
      pquantity: this.product.pquantity,
      subcat_id: 1,
    };

    this.productService.update(data)
    .subscribe(
      response => {
        console.log(response);
        alert("Data updated sucessfully");
          this.router.navigate(['/dashboard/products/list'])
            .then(() => {
            window.location.reload();
          });
        //this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }
}
