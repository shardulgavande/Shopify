import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form!: FormGroup;

  name = "";
  emailId = "";
  password = "";
  mobileNo = "";


  btnDisabled = false;

  constructor(public userService: UserService,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      emailId: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required]),
      mobileNo: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){

    console.log(this.form.value);
    this.userService.create(this.form.value).subscribe((res:any) => {
         console.log('User created successfully!');
         alert('User created successfully!');
         this.router.navigateByUrl('/login');
    })
  }
}


  // submit(){
  //   if(this.form.valid){
  //     alert('User form is valid!!')
  //   } else {
  //     alert('User form is not valid!!')
  //   }
  // }

  // submit(){
  //   alert(this.form.value);
  //    this.userService.create(this.form.value).subscribe((res:any) => {
  //        alert('User created successfully!');
  //         this.router.navigateByUrl('/UserList');

  // }



