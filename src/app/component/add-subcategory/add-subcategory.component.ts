import { Component, OnInit } from '@angular/core';
import { SubcategoryService } from 'src/app/service/subcategory.service';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {

  subcategory = {
    cat_id: '',
    sc_name:''
  };

  constructor(private subcategoryService:SubcategoryService) { }

  ngOnInit(): void {
  }

  addSubcategory(): void {
    const data:any = {

    cat_id: this.subcategory.cat_id,
    sc_name: this.subcategory.sc_name,

  };

  this.subcategoryService.create(data)
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
