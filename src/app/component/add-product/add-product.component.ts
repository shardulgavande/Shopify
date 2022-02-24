import { Component, OnInit } from '@angular/core';
import { ProductapiService } from 'src/app/service/productapi.service';
//import { IProducts } from 'src/app/IProducts';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product = {
    pname: '',
    pprice: '',
    pdesc: '',
    pimage: '',
    pquantity: '',
    subcat_id: 1
  }; 
  //submitted = false;

  constructor(private productService:ProductapiService) { }

  ngOnInit(): void {
  }

    imgurl = "../../assets/";
    imgpath = '';

    onselectFile(e:any){
      if(e.target.files){
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        console.log(e.target.files[0]['name']);
        reader.onload=(event:any)=>{
          this.imgurl = event.target.result;
          this.imgpath = "../../assets/" + e.target.files[0]['name'];
          console.log(this.imgpath);
        }
      }
    }

  addProducts(): void {
      const data:any = {

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
          alert("Data added success");
          //this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

}
