import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category ={
    type_id:'',
    c_name:''
  }

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {}

  addCategory(): void {
    const data:any = {

    type_id: this.category.type_id,
    c_name:this.category.c_name
  };

  this.categoryService.create(data)
    .subscribe(
      response => {
        console.log(response);
        alert("Data added successfully");
        //this.submitted = true;
      },
      error => {
        console.log(error);
      });
}

};
