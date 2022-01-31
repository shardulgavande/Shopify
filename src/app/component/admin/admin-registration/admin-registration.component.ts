import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {

  form!: FormGroup;

  name = "";
  emailId = "";
  password = "";
  mobileNo = "";


  btnDisabled = false;

  constructor(private router:Router,private adminService:AdminService) { }

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
    alert('Admin created successfully!');
    console.log(this.form.value);
    this.adminService.create(this.form.value).subscribe((res:any) => {
         console.log('Admin created successfully!');
         this.router.navigateByUrl('/adminlogin');
    })
  }
}
