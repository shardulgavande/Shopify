import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { IUser } from 'src/app/IUser';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  form!: FormGroup;

  id:any;
  uid: any;
  product:any;
  public emailid:any;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,
   private router: Router, private userService:UserService ) { }

  ngOnInit(): void {

    this.uid = sessionStorage.getItem('uid');
    this.emailid = sessionStorage.getItem('emailid');
    console.log("Uid "+this.uid);
    console.log("EmailId",this.emailid);


    // password not required in edit mode


    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('',[Validators.required]),
      mobileNo: new FormControl('', Validators.required)
    });


        // this.userService.find(this.id)
        //     .pipe(first())
        //     .subscribe(x => this.form.patchValue(x));




}

get f() {
   return this.form.controls;
  }

//   onSubmit() {
//     // reset alerts on submit
//     // stop here if form is invalid
//     if (this.form.invalid) {
//         return;
//     }





//         this.updateUser();

// }

// private createUser() {
//     this.accountService.register(this.form.value)
//         .pipe(first())
//         .subscribe({
//             next: () => {

//             },
//             error: error => {
//                 alert()
//                 this.loading = false;
//             }
//         });
// }

getProducts(uid:any):void{

}

submit() {

  // this.userService.find(this.uid)
  //   .subscribe(
  //     data =>{
  //       this.product = data;
  //       console.log(data);
  //     },
  //     error => {
  //       console.log(error);
  //     });

      const data = {
        id: this.uid,
        name: this.form.value['name'],
        mobileNo: this.form.value['mobileNo'],
        emailId:this.emailid,
        password: this.form.value['password'],


      };

      console.log("EmailId",this.emailid);
  this.userService.update(data).subscribe((res:any) => {

    console.log("Res",res);
    alert('User Details updated successfully!');
    console.log(this.form.value);
    console.log("EmailId",this.emailid);

    this.router.navigateByUrl('/home');

   })
}
}



