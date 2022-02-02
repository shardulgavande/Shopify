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
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,
   private router: Router, private userService:UserService ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    console.log("this.id "+this.id);


    // password not required in edit mode


    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      emailId: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required]),
      mobileNo: new FormControl('', Validators.required)
    });


        this.userService.find(this.id)
            .pipe(first())
            .subscribe(x => this.form.patchValue(x));




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

submit() {
  this.userService.update(this.id, this.form.value).subscribe((res:any) => {

    console.log('User Details updated successfully!');

    this.router.navigateByUrl('/home');

   })
}
}



