import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/IUser';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

//   id!: number;

//   user!: IUser;

//  form!: FormGroup;

//   constructor(
//      public userService: UserService,

//      private route: ActivatedRoute,

//      private router: Router) { }

  ngOnInit(): void {

//     this.id = this.route.snapshot.params['id'];

//  this.userService.find(this.id).subscribe((data:IUser)=>{

//  this.user = data;
  // })

}
// this.form = new FormGroup({

//    productName: new FormControl('', [Validators.required]),

//    Description: new FormControl('', Validators.required),

//    image: new FormControl('', Validators.required),

//    price: new FormControl('', Validators.required),

//    Category: new FormControl('', Validators.required)

//    });

//   get f(){

//      return this.form.controls;

//    }



//     submit(){

//      console.log(this.form.value);

//      this.userService.update(this.id, this.form.value).subscribe((res:any) => {

//     console.log('Product Details updated successfully!');

//     this.router.navigateByUrl('/productlist');

//      })
//  }

}
