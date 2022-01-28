import { Component, OnInit } from '@angular/core';
import { ProductapiService } from 'src/app/service/productapi.service';
import { IProducts } from 'src/app/IProducts';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product = {
    
    
    pname: '',
    pprice: 1,
    pdesc: '',
    pimage: '',
    pquantity: 1,
    subcat_id: 1
  }; 
  //submitted = false;

  constructor(private productService:ProductapiService) { }

  ngOnInit(): void {
  }

    url = "./assets";

    onselectFile(e:any){
      if(e.target.files){
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=(event:any)=>{
          this.url = event.target.result;
        }
      }
    }

  addProducts(): void {
      const data:IProducts = {

      pname: this.product.pname,
      pprice: this.product.pprice,
      pdesc: this.product.pdesc,
      pimage: this.product.pimage,
      pquantity: this.product.pquantity,
      subcat_id: 1
    }; 

    this.productService.create(data)
      .subscribe(
        response => {
          console.log(response);
          alert("Data added sucess");
          //this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

}
