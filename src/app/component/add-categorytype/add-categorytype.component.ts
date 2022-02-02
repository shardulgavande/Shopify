import { Component, OnInit } from '@angular/core';
import { CategorytypeService } from 'src/app/service/categorytype.service';

@Component({
  selector: 'app-add-categorytype',
  templateUrl: './add-categorytype.component.html',
  styleUrls: ['./add-categorytype.component.css']
})
export class AddCategorytypeComponent implements OnInit {

  categorytype = {

    type_name:''
  };

  constructor(private categorytypeService:CategorytypeService) { }

  ngOnInit(): void {
  }

  addCategorytype(): void {
    const data:any = {


    type_name: this.categorytype.type_name,

  };

  this.categorytypeService.create(data)
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
